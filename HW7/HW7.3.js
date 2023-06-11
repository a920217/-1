class Matrix {
    constructor(matrix) {
      this.matrix = matrix;
    }
  
    add(otherMatrix) {
      const rows = this.matrix.length;
      const cols = this.matrix[0].length;
      const result = [];
  
      if (rows !== otherMatrix.matrix.length || cols !== otherMatrix.matrix[0].length) {
        throw new Error("兩個矩陣的維度必須相同");
      }
  
      for (let i = 0; i < rows; i++) {
        const row = [];
  
        for (let j = 0; j < cols; j++) {
          row.push(this.matrix[i][j] + otherMatrix.matrix[i][j]);
        }
  
        result.push(row);
      }
  
      return new Matrix(result);
    }
  
    multiply(otherMatrix) {
      const rowsA = this.matrix.length;
      const colsA = this.matrix[0].length;
      const rowsB = otherMatrix.matrix.length;
      const colsB = otherMatrix.matrix[0].length;
      const result = [];
  
      if (colsA !== rowsB) {
        throw new Error("第一個矩陣的列數必須等於第二個矩陣的行數");
      }
  
      for (let i = 0; i < rowsA; i++) {
        const row = [];
  
        for (let j = 0; j < colsB; j++) {
          let sum = 0;
  
          for (let k = 0; k < colsA; k++) {
            sum += this.matrix[i][k] * otherMatrix.matrix[k][j];
          }
  
          row.push(sum);
        }
  
        result.push(row);
      }
  
      return new Matrix(result);
    }
  }
  
  // 測試矩陣相加和相乘操作物件
  const matrixA = new Matrix([[1, 2], [3, 4]]);
  const matrixB = new Matrix([[5, 6], [7, 8]]);
  
  const sumMatrix = matrixA.add(matrixB);
  console.log("矩陣相加結果：", sumMatrix.matrix);
  
  const productMatrix = matrixA.multiply(matrixB);
  console.log("矩陣相乘結果：", productMatrix.matrix);