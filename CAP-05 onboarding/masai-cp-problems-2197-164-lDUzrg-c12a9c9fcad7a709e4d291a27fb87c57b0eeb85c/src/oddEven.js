function generateNumber() {
  // generate a random integer(hint : Math.random)

let numberdiv=document.getElementById("number")
let rendomnum=Math.floor(Math.random()*101)+1 ;// 1-100

numberdiv.textContent=rendomnum;
checkOddEven(rendomnum)
}

function checkOddEven(num) {
  // logic for even / odd
  let oddEvenDiv=document.getElementById("odd-even")
  if(num%2==0){
   oddEvenDiv.textContent="The number is even"
  }else{
    oddEvenDiv.textContent="The number is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  let btn=document.getElementById("generate-number")
  btn.addEventListener("click",function(){
    generateNumber()
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
