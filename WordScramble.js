const words = ["apple", "plane", "orange", "tiger", "soccer", "basketball", "whale", "water", "lebron", "lion", "hippo", "bottle", "kyrie"];

function randomWord(){
    const randomIndex = Math.floor(Math.random()* words.length);
    let random = words[randomIndex];
    return random;
}


function scramble(){
    let word = randomWord();
    let scrambledLetters;
    const letters = word.split('');
    for(let i = letters.length - 1; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (i+1));
        [letters[i],letters[randomNum]] = [letters[randomNum], letters[i]];
    }
    scrambledLetters = letters.join('');
    document.getElementById("scrambledword").textContent = scrambledLetters;
}
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
}