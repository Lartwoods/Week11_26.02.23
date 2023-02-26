// document.querySelector(".sum").innerHTML = [].reduce.call(
//   document.querySelectorAll(".price"),
//   function (t, c) {
//     return +c.innerHTML.replace(/\D+/, "") + t;
//   },
//   0
// );
let costOne = document.querySelector(".costOne").innerHTML;
costOne = parseInt(costOne);
let costTwo = document.querySelector(".costTwo").innerHTML;
costTwo = parseInt(costTwo);
let costThree = document.querySelector(".costThree").innerHTML;
costThree = parseInt(costThree);
let costFour = document.querySelector(".costFour").innerHTML;
costFour = parseInt(costFour);

let result = document.querySelector(".total__price");
let totalSum = (result.innerHTML = costOne + costTwo + costThree + costFour);
totalSum = parseInt(totalSum);

function getDiscount() {
  let myDiscount = (totalSum * 80) / 100;
  console.log(myDiscount);
  result.innerHTML = "";
  result.innerHTML = myDiscount;
}

let buttonDiscount = document.querySelector(".button_discount");
buttonDiscount.addEventListener("click", getDiscount);
