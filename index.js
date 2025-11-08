let input = document.getElementById("input");
let SubmitBtn = document.getElementById("submit");
let buttons = document.querySelectorAll("td");

let string = "";

let arr = Array.from(buttons);
console.log(arr)

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "D") {
      string = string.substring(0, string.length-1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

