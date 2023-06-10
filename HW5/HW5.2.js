function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // 使用者輸入程式
  const number = parseInt(prompt("請輸入一個正整數："));
  
  console.log(`費氏數列前 ${number} 個數字為：`);
  for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
  }