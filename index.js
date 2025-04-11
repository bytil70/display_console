const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function() { // 注意這裡沒有參數了
  const message = Array.from(arguments).join(' ');
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
