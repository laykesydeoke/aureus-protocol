var CONFIG = {
    apiUrl: (window.AUREUS_API_URL || 'https://api.testnet.hiro.so'),
    contractAddress: (window.AUREUS_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'),
    network: (window.AUREUS_NETWORK || 'testnet')
};
var API_URL = CONFIG.apiUrl;
var CONTRACT_ADDRESS = CONFIG.contractAddress;
var userAddress = null;

// ============================================================
// Stacks API Helper Module
// ============================================================

/**
 * Generic Stacks API fetcher with error handling and JSON parsing.
 * @param {string} endpoint - Path relative to API_URL (e.g. '/extended/v1/...')
 * @returns {Promise<object>} Parsed JSON response
 */
function fetchStacksApi(endpoint) {
    return fetch(API_URL + endpoint, {
        headers: { 'Content-Type': 'application/json' }
    }).then(function (res) {
        if (!res.ok) {
            throw new Error('Stacks API error ' + res.status + ' for ' + endpoint);
        }
        return res.json();
    }).catch(function (err) {
        console.error('fetchStacksApi failed:', endpoint, err);
        throw err;
    });
}

/**
 * Get STX balance for an address.
 * @param {string} address - Stacks address
 * @returns {Promise<object>} Balance object with balance, locked fields
 */
function getSTXBalance(address) {
    return fetchStacksApi('/extended/v1/address/' + address + '/stx');
}

/**
 * Get recent contract events for a contract ID.
 * @param {string} contractId - Format: "address.contract-name"
 * @param {number} limit - Number of events to fetch (default 20)
 * @returns {Promise<object>} Events response
 */
function getContractEvents(contractId, limit) {
    var l = limit || 20;
    return fetchStacksApi('/extended/v1/contract/' + encodeURIComponent(contractId) + '/events?limit=' + l);
}

/**
 * Call a read-only contract function via the Stacks v2 API.
 * @param {string} addr - Contract deployer address
 * @param {string} name - Contract name
 * @param {string} fn - Function name
 * @param {Array} args - Array of Clarity value hex strings
 * @returns {Promise<object>} Result with okay and result fields
 */
function callContractReadOnly(addr, name, fn, args) {
    var url = API_URL + '/v2/contracts/call-read/' + addr + '/' + name + '/' + fn;
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: addr, arguments: args || [] })
    }).then(function (r) { return r.json(); });
}

/**
 * Get a transaction by its ID.
 * @param {string} txid - Transaction ID (with or without 0x prefix)
 * @returns {Promise<object>} Transaction details
 */
function getTransactionById(txid) {
    var id = txid.startsWith('0x') ? txid : '0x' + txid;
    return fetchStacksApi('/extended/v1/tx/' + id);
}

/**
 * Get current network info (block height, etc).
 * @returns {Promise<object>} Network info object
 */
function getNetworkInfo() {
    return fetchStacksApi('/v2/info');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('walletBtn').addEventListener('click', handleWalletClick);
    document.getElementById('depositBtn').addEventListener('click', handleDeposit);
    document.getElementById('withdrawBtn').addEventListener('click', handleWithdraw);
    loadProtocolRates();
    checkExistingSession();
});

function checkExistingSession() {
    try {
        // Check modern stacks-session key first, fall back to legacy blockstack-session
        var sessionKeys = ['stacks-session', 'blockstack-session'];
        for (var i = 0; i < sessionKeys.length; i++) {
            var session = localStorage.getItem(sessionKeys[i]);
            if (session) {
                var parsed = JSON.parse(session);
                if (parsed && parsed.userData) {
                    var addrKey = CONFIG.network === 'mainnet' ? 'mainnet' : 'testnet';
                    var addr = parsed.userData.profile &&
                        parsed.userData.profile.stxAddress &&
                        parsed.userData.profile.stxAddress[addrKey];
                    if (addr) {
                        userAddress = addr;
                        onConnected(addr);
                        break;
                    }
                }
            }
        }
    } catch (e) {
        console.warn('Session restore failed:', e);
    }
}

function handleWalletClick() {
    var btn = document.getElementById('walletBtn');
    if (userAddress) {
        localStorage.removeItem('stacks-session');
        localStorage.removeItem('blockstack-session');
        userAddress = null;
        btn.textContent = 'Connect Wallet';
        btn.classList.remove('connected');
        return;
    }
    connectWallet();
}

function connectWallet() {
    if (typeof window.StacksProvider === 'undefined') {
        window.open('https://wallet.hiro.so/', '_blank');
        return;
    }

    var appConfig = {
        appDetails: {
            name: 'Aureus Protocol',
            icon: window.location.origin + '/favicon.svg'
        },
        onFinish: function (data) {
            if (data && data.userSession) {
                var userData = data.userSession.loadUserData();
                userAddress = userData.profile.stxAddress.testnet;
                onConnected(userAddress);
            }
        },
        onCancel: function () {
            console.log('Wallet connection cancelled');
        }
    };

    if (window.showConnect) {
        window.showConnect(appConfig);
    } else {
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/@stacks/connect@7/dist/index.umd.js';
        script.onload = function () {
            if (window.StacksConnect && window.StacksConnect.showConnect) {
                window.StacksConnect.showConnect(appConfig);
            }
        };
        document.head.appendChild(script);
    }
}

function onConnected(address) {
    var btn = document.getElementById('walletBtn');
    btn.textContent = address.slice(0, 6) + '...' + address.slice(-4);
    btn.classList.add('connected');
    loadUserData(address);
    loadVaultMetrics();
}

function loadProtocolRates() {
    try {
        callReadOnly('protocol-adapter', 'get-all-protocol-rates', [])
            .then(function (data) {
                try {
                    if (data && data.okay && data.result) {
                        updateRates(data.result);
                    } else {
                        setDefaultRates();
                    }
                } catch (parseErr) {
                    console.error('Error parsing protocol rates:', parseErr);
                    setDefaultRates();
                }
            })
            .catch(function (err) {
                console.error('Failed to load protocol rates:', err);
                setDefaultRates();
            });
    } catch (err) {
        console.error('loadProtocolRates error:', err);
        setDefaultRates();
    }
}

function updateRates(rates) {
    var format = function (val) { return (val / 100).toFixed(1) + '%'; };

    var zest = document.getElementById('zestRate');
    var alex = document.getElementById('alexRate');
    var velar = document.getElementById('velarRate');
    var stacking = document.getElementById('stackingRate');

    if (zest) zest.textContent = format(rates.zest || 800) + ' APY';
    if (alex) alex.textContent = format(rates.alex || 720) + ' APY';
    if (velar) velar.textContent = format(rates.velar || 650) + ' APY';
    if (stacking) stacking.textContent = format(rates.stacking || 580) + ' APY';

    var best = Math.max(rates.zest || 0, rates.alex || 0, rates.velar || 0, rates.stacking || 0);
    var apyEl = document.getElementById('apy');
    if (apyEl) apyEl.textContent = format(best);
}

function setDefaultRates() {
    var el;
    el = document.getElementById('zestRate'); if (el) el.textContent = '8.0% APY';
    el = document.getElementById('alexRate'); if (el) el.textContent = '7.2% APY';
    el = document.getElementById('velarRate'); if (el) el.textContent = '6.5% APY';
    el = document.getElementById('stackingRate'); if (el) el.textContent = '5.8% APY';
    el = document.getElementById('apy'); if (el) el.textContent = '8.0%';
}

function loadVaultMetrics() {
    try {
        callReadOnly('yield-aggregator', 'get-total-deposits', [])
            .then(function (data) {
                try {
                    var tvl = document.getElementById('tvl');
                    if (tvl && data && data.okay && data.result) {
                        var rawHex = data.result.replace(/^0x0[0-9a-f]/, '');
                        tvl.textContent = (parseInt(rawHex, 16) / 100000000).toFixed(2) + ' sBTC';
                    }
                } catch (parseErr) {
                    console.error('Error parsing vault metrics:', parseErr);
                    var tvl = document.getElementById('tvl');
                    if (tvl) tvl.textContent = '0 sBTC';
                }
            })
            .catch(function (err) {
                console.error('Failed to load vault metrics:', err);
                var tvl = document.getElementById('tvl');
                if (tvl) tvl.textContent = '0 sBTC';
            });
    } catch (err) {
        console.error('loadVaultMetrics error:', err);
    }
}

function encodePrincipal(address) {
    // Encode a principal as a Clarity value for read-only calls
    return '0x0516' + address;
}

function parseUintResult(hexResult) {
    // Parse a Clarity uint response (strips leading type byte and converts)
    try {
        var stripped = hexResult.replace(/^0x0[0-9a-f]/, '');
        return parseInt(stripped, 16);
    } catch (e) {
        return 0;
    }
}

function loadUserData(address) {
    try {
        callReadOnly('yield-aggregator', 'get-user-deposit', [encodePrincipal(address)])
            .then(function (data) {
                try {
                    if (data && data.okay && data.result) {
                        var el = document.getElementById('userDeposit');
                        if (el) el.textContent = (parseUintResult(data.result) / 100000000).toFixed(4);
                    }
                } catch (e) {
                    console.error('Error parsing user deposit:', e);
                }
            })
            .catch(function (err) {
                console.error('Failed to load user deposit:', err);
            });

        callReadOnly('yield-aggregator', 'get-user-yield', [encodePrincipal(address)])
            .then(function (data) {
                try {
                    if (data && data.okay && data.result) {
                        var el = document.getElementById('userYield');
                        if (el) el.textContent = (parseUintResult(data.result) / 100000000).toFixed(4);
                    }
                } catch (e) {
                    console.error('Error parsing user yield:', e);
                }
            })
            .catch(function (err) {
                console.error('Failed to load user yield:', err);
            });
    } catch (err) {
        console.error('loadUserData error:', err);
    }
}

function uintToClarity(n) {
    // Encode a uint as Clarity value bytes (type byte 0x01 + 16 byte big-endian)
    var hex = Math.floor(n).toString(16);
    return '0x01' + hex.padStart(32, '0');
}

function handleDeposit() {
    var amountInput = document.getElementById('depositAmount');
    var amount = parseFloat(amountInput.value);
    if (!amount || amount <= 0) {
        alert('Enter a valid amount');
        return;
    }
    if (!userAddress) {
        alert('Connect your wallet first');
        return;
    }

    var microAmount = Math.floor(amount * 100000000);

    var txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: 'yield-aggregator',
        functionName: 'deposit-sbtc',
        functionArgs: [
            uintToClarity(microAmount),
            '0x0616' + CONTRACT_ADDRESS + '0a' + 'mock-sbtc'.length.toString(16).padStart(2, '0') + Buffer.from('mock-sbtc').toString('hex')
        ],
        appDetails: {
            name: 'Aureus Protocol',
            icon: window.location.origin + '/favicon.svg'
        },
        onFinish: function (data) {
            alert('Deposit submitted! TX: ' + data.txId);
            amountInput.value = '';
            loadVaultMetrics();
        },
        onCancel: function () {
            console.log('Deposit cancelled');
        }
    };

    if (window.openContractCall) {
        window.openContractCall(txOptions);
    } else if (window.StacksConnect && window.StacksConnect.openContractCall) {
        window.StacksConnect.openContractCall(txOptions);
    }
}

function handleWithdraw() {
    if (!userAddress) {
        alert('Connect your wallet first');
        return;
    }

    var amountInput = document.getElementById('depositAmount');
    var amount = parseFloat(amountInput.value);
    if (!amount || amount <= 0) {
        alert('Enter withdrawal amount');
        return;
    }

    var microAmount = Math.floor(amount * 100000000);

    var txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: 'yield-aggregator',
        functionName: 'withdraw-sbtc',
        functionArgs: [
            uintToClarity(microAmount),
            '0x0616' + CONTRACT_ADDRESS + '0a' + 'mock-sbtc'.length.toString(16).padStart(2, '0') + Buffer.from('mock-sbtc').toString('hex')
        ],
        appDetails: {
            name: 'Aureus Protocol',
            icon: window.location.origin + '/favicon.svg'
        },
        onFinish: function (data) {
            alert('Withdrawal submitted! TX: ' + data.txId);
            amountInput.value = '';
            loadVaultMetrics();
            loadUserData(userAddress);
        },
        onCancel: function () {
            console.log('Withdrawal cancelled');
        }
    };

    if (window.openContractCall) {
        window.openContractCall(txOptions);
    } else if (window.StacksConnect && window.StacksConnect.openContractCall) {
        window.StacksConnect.openContractCall(txOptions);
    }
}

function callReadOnly(contract, fnName, args) {
    var url = API_URL + '/v2/contracts/call-read/' +
        CONTRACT_ADDRESS + '/' + contract + '/' + fnName;
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sender: CONTRACT_ADDRESS,
            arguments: args || []
        })
    }).then(function (r) { return r.json(); });
}
