let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let guessInput = document.getElementById("guessInput");
let checkButton = document.getElementById("checkButton");
let restar = document.getElementById("restart");
let result = document.getElementById("result");


checkButton.onclick = () => {
    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = "Enter a number between 1 and 100.";
        result.style.color = "red";
    } else if (guess === randomNumber) {
        result.textContent = "CongratulatiOns! You Win! 🎉";
        result.style.color = "green";
        checkButton.disabled = true;
        restart.style.display = "block";
    } else {
        result.textContent = guess < randomNumber ? "Too Low! Try again." : "Too High! Try again.";
        result.style.color = "purple";
    }

    guessInput.value = "";
    guessInput.focus(); 
};


restart.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restart.style.display = "none";
    guessInput.focus();
};




