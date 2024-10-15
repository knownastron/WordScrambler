let popup = document.getElementById("popup");
let home = document.getElementById("start");
let game = document.getElementById("game-page");
let answer = document.getElementById("answer")
let score = document.getElementById("point");
let point = 0;
let tryAgainButton = document.getElementById("tryAgain");
let nextWordButton = document.getElementById("nextWord");

document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        result();
        if (!answer.value == ""){
            openPopup();
            game.style.display = "none";
        }
    }
})

function quitGame(){
    
   if(home.style.display == "none" || home.style.display == ""){
        home.style.display = "block";
        game.style.display = "none";
   }
   answer.value = "";
   point = 0;
   score.textContent = "Score: " + point;

   
}


function startGame(){
    
    if(game.style.display == "none" || home.style.display == ""){      
        game.style.display = "block";
        home.style.display = "none";
    }

    fetchRandomWord();
}

function fetchRandomWord(){
    let index = Math.floor(Math.random() * 13);
    fetch(`http://127.0.0.1:8000/scramble/${index}`)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        let hint = data.hint;
        let scrambleWord = data.message;
        document.getElementById("scrambledword").textContent = scrambleWord;
        document.getElementById("word-hint").innerHTML = `Hint: ${hint}`;
    })
}

 function refresh(){
    fetchRandomWord();
    answer.value = "";
 }

 function result(){
    let userAnswer = document.getElementById("answer").value
    fetch(`http://127.0.0.1:8000/user_answer/${userAnswer}`)
    .then (response => {
        return response.json()
    })
    .then (data => {
        let answer = data.message;
        document.getElementById("results").textContent = answer;
        if (answer == "Correct!"){
                point += 1;
                score.textContent = "Score: " + point;
                nextWordButton.style.display = "block";
                tryAgainButton.style.display = "none";
        }

        if (answer == "Wrong!"){
            tryAgainButton.style.display = "block";
            nextWordButton.style.display = "none";
        }
    })
 }

 function closePopup(button){
    popup.classList.remove("open-popup");
    
    if (button == "nextWord"){
        game.style.display = "block";
        refresh();
    }

    if (button == "quit"){
        popup.classList.remove("open-popup");
        quitGame();
    }

    if (button == "tryAgain"){
        answer.value = "";
        game.style.display = "block";
        
    }
        
    }
 

 function openPopup(){
    popup.classList.add("open-popup");
 }