function repeat(f, n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(f());
    }
  
    return result;
  }
  
  // 測試 repeat 函數
  const randomNumbers = repeat(Math.random, 10);
  console.log(randomNumbers);