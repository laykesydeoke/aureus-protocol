var API_URL = 'https://stacks-node-api.testnet.stacks.co';
var CONTRACT_ADDRESS = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('walletBtn').addEventListener('click', connectWallet);
    document.getElementById('depositBtn').addEventListener('click', handleDeposit);
    document.getElementById('withdrawBtn').addEventListener('click', handleWithdraw);
    loadProtocolRates();
});

function connectWallet() {
    var btn = document.getElementById('walletBtn');
    if (typeof window.StacksProvider !== 'undefined') {
        window.StacksProvider.authenticationRequest()
            .then(function () {
                btn.textContent = 'Connected';
                btn.disabled = true;
                loadUserData();
                loadVaultMetrics();
            })
            .catch(function (err) {
                console.error('Connection failed:', err);
            });
    } else {
        window.open('https://wallet.hiro.so/', '_blank');
    }
}

function loadProtocolRates() {
    callReadOnly('protocol-adapter', 'get-all-protocol-rates', [])
        .then(function (data) {
            if (data && data.result) {
                updateRates(data.result);
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
    document.getElementById('zestRate').textContent = '8.0% APY';
    document.getElementById('alexRate').textContent = '7.2% APY';
    document.getElementById('velarRate').textContent = '6.5% APY';
    document.getElementById('stackingRate').textContent = '5.8% APY';
    document.getElementById('apy').textContent = '8.0%';
}

function loadVaultMetrics() {
    callReadOnly('yield-aggregator', 'get-total-deposits', [])
        .then(function (data) {
            var tvl = document.getElementById('tvl');
            if (tvl && data && data.result) {
                tvl.textContent = (data.result / 100000000).toFixed(2) + ' sBTC';
            }
        })
        .catch(function () {
            document.getElementById('tvl').textContent = '0 sBTC';
        });
}

function loadUserData() {
    callReadOnly('yield-aggregator', 'get-user-deposit', [])
        .then(function (data) {
            if (data && data.result) {
                document.getElementById('userDeposit').textContent = (data.result / 100000000).toFixed(4);
            }
        });

    callReadOnly('yield-aggregator', 'get-user-yield', [])
        .then(function (data) {
            if (data && data.result) {
                document.getElementById('userYield').textContent = (data.result / 100000000).toFixed(4);
            }
        });
}

function handleDeposit() {
    var amount = document.getElementById('depositAmount').value;
    if (!amount || amount <= 0) return;
    console.log('Deposit:', amount, 'sBTC');
}

function handleWithdraw() {
    console.log('Withdraw requested');
}

function callReadOnly(contract, fnName, args) {
    var url = API_URL + '/v2/contracts/call-read/' +
        CONTRACT_ADDRESS + '/' + contract + '/' + fnName;
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: CONTRACT_ADDRESS, arguments: args || [] })
    }).then(function (r) { return r.json(); });
}
