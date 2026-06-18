function compute()
{
    const selectOperation = document.querySelector('input[name = "operation"]:checked').value;
    let firstNum = Number(document.getElementById("first_num").value);
    let secondNum = Number(document.getElementById("second_num").value);

    console.log(selectOperation);
    if(selectOperation == '+')
    document.getElementById("result").textContent = firstNum + secondNum;
    else if(selectOperation == '-')
    document.getElementById("result").textContent = firstNum - secondNum;
    else if(selectOperation == '*')
    document.getElementById("result").textContent = firstNum * secondNum;
    else if(selectOperation == '/')
    document.getElementById("result").textContent = firstNum / secondNum;
       

}