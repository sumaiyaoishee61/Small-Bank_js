//handdle deposit event button
document.getElementById('deposit-button').addEventListener
('click', function(){
    //get tha amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
   //deposit-total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
     const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal;

   // balance

   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;


    ///clear the  deposit input field
    depositInput.value= '';

});
///withdraw handler
document.getElementById('withdraw-button').addEventListener
('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    ///set withdaw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //clear  withdraw -input
    withdrawInput.value= '';
    //update balance
    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


})