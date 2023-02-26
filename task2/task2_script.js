const changeHandler = function (e) {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};
// let square = document.querySelector("result");
// square.setAttribute(disabled, true);
function getSquare() {
  const number = document.querySelector(".input").value;
  let square = document.querySelector(".result");

  square.value = Math.pow(number, 2);
  console.log(square.value);
}
