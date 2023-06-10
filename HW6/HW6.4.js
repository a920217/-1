function mmultiply(a, b) {
    if (a[0].length !== b.length) {
      throw new Error("第一個矩陣的列數必須等於第二個矩陣的行數");
    }
  
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      const row = [];
  
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
  
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
  
        row.push(sum);
      }
  
      result.push(row);
    }
  
    return result;
  }
  
  // 使用者輸入程式
  const rowsA = parseInt(prompt("請輸入第一個矩陣的行數："));
  const colsA = parseInt(prompt("請輸入第一個矩陣的列數："));
  const rowsB = parseInt(prompt("請輸入第二個矩陣的行數："));
  const colsB = parseInt(prompt("請輸入第二個矩陣的列數："));
  
  console.log("輸入矩陣 A：");
  const matrixA = readMatrix(rowsA, colsA);
  
  console.log("輸入矩陣 B：");
  const matrixB = readMatrix(rowsB, colsB);
  
  try {
    const productMatrix = mmultiply(matrixA, matrixB);
    console.log("矩陣相乘的結果：", productMatrix);
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