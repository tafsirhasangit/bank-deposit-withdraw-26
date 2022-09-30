//add event handeler
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get the withdraw ammount from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    //get withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

  

     //get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      //clear the input field
      withdrawField.value = '';
      
    if(newWithdrawAmmount > previousBalanceTotal){
        alert('sorry taka nai');
        return;
    }
      //calculate total withdraw ammount
      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;

      //set total withdraw ammount
      withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //calculate new balance total and set



  
})