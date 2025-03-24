async function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    const response = await fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`);
    const data = await response.json();

    document.getElementById("result").innerText = `Result: ${data.result}`;
}

async function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    const response = await fetch(`http://localhost:8080/sub?num1=${num1}&num2=${num2}`);
    const data = await response.json();

    document.getElementById("result").innerText = `Result: ${data.result}`;
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}
