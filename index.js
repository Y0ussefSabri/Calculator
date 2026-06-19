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

async function generateAndCompute()
{
    // const response = await fetch(
    //     "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=2"
    // );

    // const numbers = await response.json();
    // console.log(numbers);
    // document.getElementById("first_num").value = numbers[0];
    // document.getElementById("second_num").value = numbers[1];
    fetch("https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=2")

    .then(res => res.json())

    .then(data => console.log(data))

    .catch(err => console.error(err));
}