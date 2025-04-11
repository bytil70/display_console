const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function(message) {
  originalConsoleLog(message); // 仍然將訊息輸出到瀏覽器的實際 Console (如果連接了遠端偵錯)
  if (consoleOutput) {
    consoleOutput.innerHTML += message + '<br>'; // 將訊息添加到 HTML 元素中，並換行
  }
};

// 您的 JavaScript 程式碼，包含 console.log()
console.log('Hello from JavaScript!');
let myVariable = 123;
console.log('變數 myVariable 的值是：', myVariable);

function myFunction() {
  let result = 5 * 2;
  console.log('函式 myFunction 的結果是：', result);
}

myFunction();
