//1

let numbers=20;
for (let i = 20.5; i <= 30; i+=0.5) {
  numbers=numbers + ' ' + i;
}
console.log(numbers)

//2

const dollarRate = 27;

for (let i = 10; i <= 100; i += 10) {
  console.log(dollarRate * i);
}

//3

const Num = 120;
for (let i = 1; i < 101; i++) {
  if (i * i < Num) {
     console.log(i);
  }
}
//4
let startNum=1;
while (startNum < Num) {
start: if (Num % 2 === 0) {
    console.log("Not a primary number", Num);
    break;
  } else console.log("Is a primary number", Num);
    break;
}
//5
let number = +prompt("task 5.  Input nice number");
let numberBase = 3;
start: for (let i = 0; i <= number; i++) {
  let result = numberBase ** i;
  if (number === result) {
    alert (`number to the power of 3 of ${number} is ${i}`)
  } break
}
 start: for (let i = 0; i <= number; i++) {
  let result = numberBase ** i;
  if (number != result) {
    alert (`number to the power of 3 of ${number} doesnt exist`)
  } break
}



