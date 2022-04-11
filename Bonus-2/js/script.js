// Stampare in console numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    // Creare una variabile a cui assegnare a seconda dei casi Fizz o Buzz o FizzBuzz
    let FizzBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "fizzbuzz";
    } else if (i % 3 === 0) {
        FizzBuzz = "fizz"; 
    } else if (i % 5 === 0) {
        FizzBuzz = "buzz";
    } else {
        FizzBuzz = "bg-blue";
    }
    console.log(i, FizzBuzz);

    // Appendere un elemento HTML ad ogni i
    if (FizzBuzz === "fizzbuzz" || FizzBuzz === "fizz" || FizzBuzz === "buzz") {
        document.querySelector(".box-wrapper").innerHTML += `<div class="box ${FizzBuzz}">${FizzBuzz}</div>`;
    } else {
        document.querySelector(".box-wrapper").innerHTML += `<div class="box ${FizzBuzz}">${i}</div>`;
    }
}