function vdot(a, b) {
    if (a.length !== b.length) {
      throw new Error("向量的維度不相等");
    }
  
    let dotProduct = 0;
  
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
    }
  
    return dotProduct;
  }
  
  // 使用者輸入程式
  const vectorA = prompt("請輸入向量 A，以逗號分隔每個元素：");
  const vectorB = prompt("請輸入向量 B，以逗號分隔每個元素：");
  
  const arrA = vectorA.split(",").map(Number);
  const arrB = vectorB.split(",").map(Number);
  
  try {
    const dotProduct = vdot(arrA, arrB);
    console.log("向量內積的結果：", dotProduct);
  } catch (error) {
    console.error("錯誤：", error.message);
  }