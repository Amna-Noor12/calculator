    const display = document.getElementById('display');

    function appendNumber(num) {
      if (display.innerText === '0') {
        display.innerText = num;
      } else {
        display.innerText += num;
      }
    }

    function appendOperator(op) {
      const lastChar = display.innerText.slice(-1);
      if ("+-*/%^".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + op;
      } else {
        display.innerText += op;
      }
    }

    function appendFunction(func) {
      if (func === 'sqrt') {
        display.innerText += '√(';
      } else if (func === 'square') {
        display.innerText += '^2';
      } else if (func === 'pi') {
        display.innerText += Math.PI.toFixed(6);
      } else if (func === 'e') {
        display.innerText += Math.E.toFixed(6);
      } else if (['sin','cos','tan','log'].includes(func)) {
        display.innerText += func + '(';
      } else if (func === '^') {
        display.innerText += '^';
      }
    }

    function clearDisplay() {
      display.innerText = '0';
    }

    function deleteLast() {
      if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
      } else {
        display.innerText = '0';
      }
    }

    function calculateResult() {
      try {
        let expression = display.innerText
          .replace(/√\(/g, 'Math.sqrt(')
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/\^/g, '**');

        let result = eval(expression);
        display.innerText = result;
      } catch (e) {
        display.innerText = 'Error';
      }
    }