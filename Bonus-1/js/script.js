// Stampare in console numeri da 1 a 100
const rowBox = document.querySelector(".box-wrapper");
for (let i = 1; i <= 100; i++) {
    // Creare una variabile a cui assegnare a seconda dei casi Fizz o Buzz o FizzBuzz
    let FizzBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "fizz-buzz";
    } else if (i % 3 === 0) {
        FizzBuzz = "fizz"; 
    } else if (i % 5 === 0) {
        FizzBuzz = "buzz";
    } else FizzBuzz = i;

    console.log(FizzBuzz);

    // Appendere un elemento HTML ad ogni i
    rowBox.innerHTML += `<div class="box">${FizzBuzz}</div>`;
}