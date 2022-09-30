// step 1; add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get the deposit ammount from the deposit input field
    // for input field use .value to the value inside the insput field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    

    // step 3: get the current deposit total  ammount
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositeTotal = previousDepositTotal + newDepositAmmount;


    depositTotalElement.innerText = currentDepositeTotal;
    //get balance current total
    

    const balanceTotalElement = document.getElementById('balance-total');
    
    
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    console.log(currentBalanceTotal);
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear the deposit field
   
})