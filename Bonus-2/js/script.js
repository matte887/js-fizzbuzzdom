const rowBox = document.querySelector(".box-wrapper");

// Stampare in console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creare una variabile a cui assegnare a seconda dei casi Fizz o Buzz o FizzBuzz
    let FizzBuzz;
    let color = "";
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "fizzbuzz";
        color = "bg-red";
    } else if (i % 3 === 0) {
        FizzBuzz = "fizz"; 
        color = "bg-green";
    } else if (i % 5 === 0) {
        FizzBuzz = "buzz";
        color = "bg-yellow";
    } else {
        FizzBuzz = i;
        color = "bg-blue";
    }
    console.log(i, FizzBuzz);
    
    // Appendere un elemento HTML ad ogni i ed assegnare una classe
    rowBox.innerHTML += `<div class="box ${color}">${FizzBuzz}</div>`;
}