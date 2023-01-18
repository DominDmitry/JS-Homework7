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

const Num = +prompt("Input some number")
for (let i = 1; i < 101; i++) {
  if (i * i < Num) {
     console.log(i);
  }
}
//4

let divider =2;

  while (divider <= Num) {
    if (Num % divider === 0) {
      alert("Not a primary number", Num)
    } else  alert("Its a primary number", Num)
    divider += 1;
   break
  } 

//5
let number = +prompt("task 5.  Input nice number");
for (let i = 1; i <= number; i++) {
  if (number === Math.pow(i, 3)) {
    alert (`number to the power of 3 of ${number} is ${i}`)
  }
}




