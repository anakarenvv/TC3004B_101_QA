function calculate(){

    const num1= document.getElementById("num1").value;
    const num2= document.getElementById("num2").value;

        let result;
        result= Number(num1) + Number (num2);
        document.getElementById("result").innerText="Result:" + result.toFixed(2);
    
}


function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let result = Number(num1) - Number(num2);
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").innerText = "+";
    document.getElementById("result").innerText = "Result:";
}
