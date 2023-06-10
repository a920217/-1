function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw new Error("矩陣的維度不相等");
    }
  
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      const row = [];
  
      for (let j = 0; j < a[i].length; j++) {
        row.push(a[i][j] + b[i][j]);
      }
  
      result.push(row);
    }
  
    return result;
  }
  
  // 使用者輸入程式
  const rows = parseInt(prompt("請輸入矩陣的行數："));
  const cols = parseInt(prompt("請輸入矩陣的列數："));
  
  console.log("輸入矩陣 A：");
  const matrixA = readMatrix(rows, cols);
  
  console.log("輸入矩陣 B：");
  const matrixB = readMatrix(rows, cols);
  
  try {
    const sumMatrix = madd(matrixA, matrixB);
    console.log("矩陣相加的結果：", sumMatrix);
  } catch (error) {
    console.error("錯誤：", error.message);
  }
  
  // 函式：讀取使用者輸入的矩陣
  function readMatrix(rows, cols) {
    const matrix = [];
  
    for (let i = 0; i < rows; i++) {
      const row = [];
  
      for (let j = 0; j < cols; j++) {
        const element = parseFloat(prompt(`請輸入元素 A[${i}][${j}]：`));
        row.push(element);
      }
  
      matrix.push(row);
    }
  
    return matrix;
  }