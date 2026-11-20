alert("بازی حدس عدد")

const randomNumber = Math.ceil(Math.random() * 100);
let numberOfguess = 0;
// console.log(randomNumber);

const validateNumber = (value) => {
if (isNaN(value)) {
    return "Please Enter A Valid Number !";
}  else if (+value < 1 || +value > 100) {
    return "Please enter A Number Between 1 to 100";
}
}; 
const checkGuess = (guess) => {
    numberOfguess++;
     console.log(numberOfguess);

if (guess === randomNumber) { 
    console.log("You Guess Correctly !");
} else if (guess < randomNumber) {
    console.log("Try again !! is low");
    play();
}  else {
    console.log("Try again !!is high");
    play();
}

}

const play = () => {
    const number = prompt("Enter a number between 1 to 100");
     if (number === null) return; 
     if (numberOfguess >= 10 ){
        console.log("Game Over ...");
         return;
        } 
    const validation =  validateNumber (number);
    if (validation) {  
      console.log(validation);
      return play();
}

checkGuess(+number)
};
play();