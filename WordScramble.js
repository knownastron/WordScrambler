const words = ["apple", "plane", "orange", "tiger", "soccer", "basketball", "whale", "water", "lebron", "lion", "hippo", "bottle", "kyrie"];
let random;
function randomWord(){
    const randomIndex = Math.floor(Math.random()* words.length);
    random = words[randomIndex];
    
}


function scramble(){
    randomWord();
    let word = random;
    let scrambledLetters;
    const letters = word.split('');
    for(let i = letters.length - 1; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (i+1));
        [letters[i],letters[randomNum]] = [letters[randomNum], letters[i]];
    }
    scrambledLetters = letters.join('');
    document.getElementById("scrambledword").textContent = scrambledLetters;
}

let checkButtons = false;
function result(){
    let guess = document.getElementById("answer").value;
    let lower = guess.toLowerCase();
    let outcome = "Wrong!";
    if(lower == random){
            outcome = "Correct!";
            document.getElementById("displayResult").textContent = outcome;
        }
        document.getElementById("displayResult").textContent = outcome;

    if(checkButtons == false){ 

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
        checkButtons = true;
    }
}
function navigateToPage(){
    window.location.href = "WordScramble.html";
}