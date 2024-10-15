


#GET - GET AN INFORMATION
#POST - CREATE SOMETHING NEW
#PUT - UPDATE SOMETHING THAT ALREADY EXIST
#DELETE - DELETE SOMETHING

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from random import shuffle

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # This should be restricted to your frontend URL in production
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

wordStorage = [
   "apple",
   "plane",
   "orange", 
   "tiger", 
   "soccer", 
   "basketball", 
   "whale", 
   "water", 
   "lebron", 
   "lion", 
   "hippo", 
   "bottle", 
   "kyrie"
   ]
randomWord = ''

wordHints = {
   "apple": "a red fruit",
   "plane": "a moving object in the sky",
   "orange": "a citrus fruit",
   "tiger": "a striped animal",
   "soccer": "a sport played with your feet",
   "basketball": "a sport played with two nets",
   "whale": "a huge aquatic mammal",
   "water": "a liquid substance",
   "lebron": "the goat in basketball",
   "lion": "king of the jungle",
   "hippo": "a big swamp animal",
   "bottle": "a object used to contain liquids",
   "kyrie": "best ball handler in basketball"
}

@app.get("/scramble/{word_id}")
async def scramble_word(word_id: int):
   global randomWord
   randomWord = wordStorage[word_id]
   hint = wordHints[randomWord]
   wordInList = list(randomWord)
   shuffle(wordInList)
   scrambledWord = ''.join(wordInList)
  
   return {"message": scrambledWord, "hint": hint}
   

@app.get("/user_answer/{answer}")
async def result(answer :str):
   global randomWord
   if answer == randomWord:
      return {"message": "Correct!"}

   else:
      return {"message": "Wrong!"}


