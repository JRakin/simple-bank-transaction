const loginBtn = document.getElementById('login-btn');
const loginArea = document.getElementById('login-area');
const transactionArea = document.getElementById('transaction-area');
const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');

// LOGIN BUTTON EVENT HANDLER

if (loginBtn) {
  loginBtn.addEventListener('click', function (event) {
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
  });
}

if (depositBtn) {
  depositBtn.addEventListener('click', function (event) {
    const depositAmount = document.getElementById('deposit-amount').value;

    if (depositAmount) {
      const depositNumber = parseFloat(depositAmount);
      const currentDeposit = document.getElementById('current-deposit')
        .innerText;
      const currentDepositNumber = parseFloat(currentDeposit);
      const totalDeposit = depositNumber + currentDepositNumber;
      document.getElementById('current-deposit').innerText = totalDeposit;

      const currentBalance = document.getElementById('current-balance')
        .innerText;
      const currentBalanceNumber = parseFloat(currentBalance);
      const totalBalance = depositNumber + currentBalanceNumber;
      document.getElementById('current-balance').innerText = totalBalance;

      document.getElementById('deposit-amount').value = '';
    }
  });
}

if (withdrawBtn) {
  withdrawBtn.addEventListener('click', function (event) {
    const withdrawAmount = document.getElementById('withdraw-amount').value;

    if (withdrawAmount) {
      const withdrawAmountNumber = parseFloat(withdrawAmount);
      const currentBalance = document.getElementById('current-balance')
        .innerText;
      const currentBalanceNumber = parseFloat(currentBalance);

      if (currentBalanceNumber >= withdrawAmountNumber) {
        const totalBalance = currentBalance - withdrawAmountNumber;
        document.getElementById('current-balance').innerText = totalBalance;
        // const currentDeposit = document.getElementById('current-deposit')
        //   .innerText;
        // const currentDepositNumber = parseFloat(currentDeposit);
        // const totalDeposit = currentDepositNumber -
        const currentWithdraw = document.getElementById('current-withdraw')
          .innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = currentWithdrawNumber + withdrawAmountNumber;

        document.getElementById('current-withdraw').innerText = totalWithdraw;
        document.getElementById('withdraw-amount').value = '';
      } else {
        alert('Your current balance is very low!');
        document.getElementById('withdraw-amount').value = '';
      }
    }
  });
}
