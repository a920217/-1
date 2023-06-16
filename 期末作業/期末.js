function appendCharacter(char) {
    const result = document.getElementById('result');
    result.value += char;
  }
  
  function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
  }
  
  function deleteLastChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    const result = document.getElementById('result');
    const expression = result.value;
    try {
      const calculatedResult = eval(expression);
      result.value = calculatedResult;
    } catch (error) {
      result.value = 'Error';
    }
  }