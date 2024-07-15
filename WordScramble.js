const words = ["apple", "plane", "orange", "tiger", "soccer", "basketball", "whale", "water", "lebron", "lion", "hippo", "bottle", "kyrie"];
<<<<<<< Updated upstream

function randomWord(){
    const randomIndex = Math.floor(Math.random()* words.length);
    let random = words[randomIndex];
    return random;
}


function scramble(){
    let word = randomWord();
    let scrambledLetters;
    const letters = word.split('');
=======
let wordToBeGuessed;
function setWordToBeGuessed(){
    const randomIndex = Math.floor(Math.random()* words.length);
    wordToBeGuessed = words[randomIndex];
    
}

function scramble(){
    setWordToBeGuessed();
    let scrambledLetters;
    const letters = wordToBeGuessed.split('');
>>>>>>> Stashed changes
    for(let i = letters.length - 1; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (i+1));
        [letters[i],letters[randomNum]] = [letters[randomNum], letters[i]];
    }
    scrambledLetters = letters.join('');
    document.getElementById("scrambledword").textContent = scrambledLetters;
}
<<<<<<< Updated upstream
function result(){
    let guess = document.getElementById("answer").value;
    let outcome;

    if (words.includes(guess) == true){
        outcome = "Correct!";
        document.getElementById("x").textContent = outcome;
        
    }
    else{
        outcome = "Wrong!";
        document.getElementById("x").textContent = outcome;
    }
    const newButton = document.createElement('button');
    newButton.textContent = 'Play Again';
    document.body.appendChild(newButton);
    newButton.addEventListener('click',() =>{
        navigateToPage();
    })
    secondButton = document.createElement('button');
    secondButton.textContent = 'Exit';
    document.body.appendChild(secondButton);
    secondButton.addEventListener('click',() =>{
        window.location.href = "WordScramble.html";
    })



}
function navigateToPage(){
    window.location.href = "WordScramble2.html";
=======

let isThereButtons = false;
function result(){
    let guess = document.getElementById("answer").value;
    let lower = guess.toLowerCase();
    let outcome = "Wrong!";
    if(lower == wordToBeGuessed){
            outcome = "Correct!";
            document.getElementById("displayResult").textContent = outcome;
        }
        document.getElementById("displayResult").textContent = outcome;

    if (isThereButtons == false){ 

        const newButton = document.createElement('button');
        newButton.textContent = 'Play Again';
        document.body.appendChild(newButton);
        newButton.addEventListener('click',() =>{
            navigateToPage();
        });
        secondButton = document.createElement('button');
        secondButton.textContent = 'Exit';
        document.body.appendChild(secondButton);
        secondButton.addEventListener('click',() =>{
            window.location.href = "intro.html";
        });
        isThereButtons = true;
    }
}
function navigateToPage(){
    window.location.href = "WordScramble.html";
>>>>>>> Stashed changes
}