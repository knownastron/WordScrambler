

document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        result();
    }
})
let isThereButtons = false;
function result(){
    let userAnswer = document.getElementById("answer").value;
    fetch(`http://127.0.0.1:8000/user_answer/${userAnswer}`)
        .then(response => response.json())
        .then(data => document.getElementById("displayResult").textContent = data.message)

        if (!isThereButtons){
            createButtons();
        }
}
/*
function createButtons(){
    const newButton = document.createElement('button');
    newButton.textContent = 'Play Again';
    document.body.appendChild(newButton);
    newButton.addEventListener('click',() =>{
        navigateToPage();
    });

    const secondButton = document.createElement('button');
    secondButton.textContent = 'Exit';
    document.body.appendChild(secondButton);
    secondButton.addEventListener('click',() =>{
    window.location.href = "intro.html";
    });
    
    isThereButtons = true;

}
*/
function navigateToPage(){
    window.location.href = "WordScramble.html";
   
}

function fetchRandomWord(){
    const randomIndex = Math.floor(Math.random()* 13);
    fetch(`http://127.0.0.1:8000/scramble/${randomIndex}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => document.getElementById("scrambledword").textContent = data.message)
        .catch(error => console.log(error))

        
}

