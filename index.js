const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function() {
  const message = Array.from(arguments).join(' '); // 將所有參數連接成一個字串
  originalConsoleLog.apply(console, arguments);
  if (consoleOutput) {
    consoleOutput.innerHTML += message + '<br>';
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
