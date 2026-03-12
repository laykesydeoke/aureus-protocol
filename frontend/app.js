var API_URL = 'https://api.testnet.hiro.so';
var CONTRACT_ADDRESS = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
var userAddress = null;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('walletBtn').addEventListener('click', handleWalletClick);
    document.getElementById('depositBtn').addEventListener('click', handleDeposit);
    document.getElementById('withdrawBtn').addEventListener('click', handleWithdraw);
    loadProtocolRates();
    checkExistingSession();
});

function checkExistingSession() {
    try {
        var session = localStorage.getItem('blockstack-session');
        if (session) {
            var parsed = JSON.parse(session);
            if (parsed && parsed.userData) {
                var addr = parsed.userData.profile &&
                    parsed.userData.profile.stxAddress &&
                    parsed.userData.profile.stxAddress.testnet;
                if (addr) {
                    userAddress = addr;
                    onConnected(addr);
                }
            }
        }
    } catch (e) {
        // No session
    }
}

function handleWalletClick() {
    var btn = document.getElementById('walletBtn');
    if (userAddress) {
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
    callReadOnly('protocol-adapter', 'get-all-protocol-rates', [])
        .then(function (data) {
            if (data && data.okay && data.result) {
                updateRates(data.result);
            } else {
                setDefaultRates();
            }
        })
        .catch(function () {
            setDefaultRates();
        });
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
    callReadOnly('yield-aggregator', 'get-total-deposits', [])
        .then(function (data) {
            var tvl = document.getElementById('tvl');
            if (tvl && data && data.okay && data.result) {
                tvl.textContent = (parseInt(data.result, 16) / 100000000).toFixed(2) + ' sBTC';
            }
        })
        .catch(function () {
            var tvl = document.getElementById('tvl');
            if (tvl) tvl.textContent = '0 sBTC';
        });
}

function loadUserData(address) {
    callReadOnly('yield-aggregator', 'get-user-deposit', [
        '0x0616' + address
    ])
        .then(function (data) {
            if (data && data.okay && data.result) {
                var el = document.getElementById('userDeposit');
                if (el) el.textContent = (parseInt(data.result, 16) / 100000000).toFixed(4);
            }
        });

    callReadOnly('yield-aggregator', 'get-user-yield', [
        '0x0616' + address
    ])
        .then(function (data) {
            if (data && data.okay && data.result) {
                var el = document.getElementById('userYield');
                if (el) el.textContent = (parseInt(data.result, 16) / 100000000).toFixed(4);
            }
        });
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
            '0x01' + microAmount.toString(16).padStart(32, '0'),
            CONTRACT_ADDRESS + '.mock-sbtc'
        ],
        appDetails: {
            name: 'Aureus Protocol',
            icon: window.location.origin + '/favicon.svg'
        },
        onFinish: function (data) {
            alert('Deposit submitted! TX: ' + data.txId);
            amountInput.value = '';
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

    var txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: 'yield-aggregator',
        functionName: 'withdraw-sbtc',
        functionArgs: [
            '0x01' + 'ffffffffffffffffffffffffffffffff',
            CONTRACT_ADDRESS + '.mock-sbtc'
        ],
        appDetails: {
            name: 'Aureus Protocol',
            icon: window.location.origin + '/favicon.svg'
        },
        onFinish: function (data) {
            alert('Withdrawal submitted! TX: ' + data.txId);
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
