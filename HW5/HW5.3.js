function truthTable(n) {
    const table = [];
  
    // 遞迴生成真值表
    function generateRow(row, count) {
      if (count === n) {
        table.push(row);
        return;
      }
  
      generateRow(row.concat(0), count + 1);
      generateRow(row.concat(1), count + 1);
    }
  
    generateRow([], 0);
  
    return table;
  }
  
  // 使用者輸入程式
  const number = parseInt(prompt("請輸入變數數量："));
  
  const table = truthTable(number);
  
  // 輸出真值表
  console.log(`變數數量：${number}`);
  console.log("真值表：");
  table.forEach(row => {
    console.log(row.join(", "));
  });