function vadd(a, b) {
    if (a.length !== b.length) {
      throw new Error("向量的維度不相等");
    }
  
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      result.push(a[i] + b[i]);
    }
  
    return result;
  }
  
  // 使用者輸入程式
  const vectorA = prompt("請輸入向量 A，以逗號分隔每個元素：");
  const vectorB = prompt("請輸入向量 B，以逗號分隔每個元素：");
  
  const arrA = vectorA.split(",").map(Number);
  const arrB = vectorB.split(",").map(Number);
  
  try {
    const sum = vadd(arrA, arrB);
    console.log("向量相加的結果：", sum);
  } catch (error) {
    console.error("錯誤：", error.message);
  }