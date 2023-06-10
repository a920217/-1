function isPrime(n) {
  // 1 和負數不是質數
  if (n <= 1) {
    return false;
  }

  // 檢查從 2 到 n-1 的所有數字
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      // 如果 n 可以被任何數字整除，則不是質數
      return false;
    }
  }

  // 如果沒有找到可以整除的數字，則是質數
  return true;
}

// 使用者輸入程式
const number = parseInt(prompt("請輸入一個正整數："));

if (isPrime(number)) {
  console.log(`${number} 是質數`);
} else {
  console.log(`${number} 不是質數`);
}