let number = Math.floor(Math.random() * 100);
// let name = ["Raju","Naveen","Ravi","Babu"]
let chances = 0;
console.log(number);
// let a = Number.parseInt(a)
let a;
do {
   a = prompt("Guess the correct number:");
  chances++;
  if (a == number) {
    console.log("You have to guess the correct number in " + chances + " chances.");
    break;
  } else if (a < number) {
    alert("You have entered a number smaller than the value.");
  } else if (a > number) {
    alert("You have entered a number greater than the value.");
  }
} while (a !== number);
