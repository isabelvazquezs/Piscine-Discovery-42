function calculate() {
    const left = document.getElementById("leftOperand").value;
    const right = document.getElementById("rightOperand").value;
    const operator = document.getElementById("operator").value;
  
    const num1 = parseInt(left);
    const num2 = parseInt(right);
  
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
      alert("Error :(");
      return;
    }
  
    if ((operator === "/" || operator === "%") && num2 === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }
  
    let result;
  
    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = Math.floor(num1 / num2); break;
      case "%": result = num1 % num2; break;
      default: result = "Operador inválido";
    }
  
    alert("Resultado: " + result);
    console.log("Resultado:", result);
  }
  
  setInterval(() => {
    alert("Please, use me...");
  }, 30000);
  