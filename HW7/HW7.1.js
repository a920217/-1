function convertMonthToNumber(month) {
    const monthMap = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
  
    const monthNumber = monthMap[month];
  
    if (monthNumber === undefined) {
      throw new Error("無效的月份");
    }
  
    return monthNumber;
  }
  
  // 使用者輸入程式
  const monthInput = prompt("請輸入英文月份：");
  
  try {
    const monthNumber = convertMonthToNumber(monthInput);
    console.log(`${monthInput} 轉換為數字為 ${monthNumber}`);
  } catch (error) {
    console.error("錯誤：", error.message);
  }