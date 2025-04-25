$(document).ready(function () {
    $('#tryme').click(function () {
      const left = parseInt($('#left').val());
      const right = parseInt($('#right').val());
      const operator = $('#operator').val();
  
      if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
        alert("Error :(");
        return;
      }
  
      if ((operator === '/' || operator === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
      }
  
      let result;
      switch (operator) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '*': result = left * right; break;
        case '/': result = Math.floor(left / right); break;
        case '%': result = left % right; break;
      }
  
      alert("Result: " + result);
      console.log("Result: " + result);
    });
  
    setInterval(() => {
      alert("Please, use me...");
    }, 30000);
  });
  