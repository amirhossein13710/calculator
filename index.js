let display = document.querySelector("#display");
let button = document.querySelector("#btn");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let clearButton = document.querySelector("#clear");
let root = document.querySelector("#root");
let square = document.querySelector("#square");
let backspace = document.querySelector("#backspace");
let equal = document.querySelector("#equal");

let lastOperation = "";
let memory = 0;

button.addEventListener("click", inputNumber);
function inputNumber(event) {
  if (display.textContent.length > 15) {
    return;
  }
  let data = event.target.dataset.input;
  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += data;
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
}
clearButton.addEventListener("click", () => {
  display.textContent = 0;
  lastOperation = "";
  memory = 0;
});
minus.addEventListener("click", () => {
  lastOperation = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
});
plus.addEventListener("click", () => {
  lastOperation = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
});
divide.addEventListener("click", () => {
  lastOperation = "divide";
  memory = Number(display.textContent);
  display.textContent = 0;
});
multiply.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = Number(display.textContent);
  display.textContent = 0;
});
equal.addEventListener("click", () => {
  if (lastOperation !== "") {
    let number = display.textContent;
    if (lastOperation == "minus") {
      display.textContent = memory - number;
    }
    if (lastOperation == "plus") {
      display.textContent = memory + number;
    }
    if (lastOperation == "divide") {
      display.textContent = memory / number;
    }
    if (lastOperation == "multiply") {
      display.textContent = memory * number;
    }
    lastOperation = ""
  }
});
backspace.addEventListener("click",()=>{
    if(display.textContent.length === 1){
        display.textContent = 0
    }else{
        display.textContent = display.textContent.substring(0 , display.textContent.length - 1)
    }
})
square.addEventListener("click",()=>{
    display.textContent **= 2
    lastOperation = ""
})
root.addEventListener("click",()=>{
    display.textContent = Math.sqrt(display.textContent)
    lastOperation = ""
})