// Stampare in console numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    let FizzBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "FizzBuzz";
    } else if (i % 3 === 0) {
        FizzBuzz = "Fizz"; 
    } else if (i % 5 === 0) {
        FizzBuzz = "Buzz";
    }
    console.log(i, FizzBuzz);
}