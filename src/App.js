import React, {useLayoutEffect, useState} from 'react'
import Keyboard from './components/keyboard/keyboard';
import "./App.css"

let paragraphs = {
    title: "Physics",
    content: "Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.",
    maxTime: 10000,
    level: "EASY"
  }

let arrayContentWords = paragraphs.content.replace(/[,.]/g, "").split(" ")
let maxTime = paragraphs.maxTime
let intervalTime = 100

let steps = 100 / (maxTime/intervalTime)

function App() {

  const [arrayOfWords, setArrayOfWords] = useState(arrayContentWords)
  const [word, updateWord] = useState("")
  const [timeOut, setTimeout] = useState(false)
  const [score, updateScore] = useState(0)


  useLayoutEffect(() => {
      let bar = document.querySelector(".bar")
      bar.style.width = "0%"
      let intervalID = setInterval(() => {
        bar.style.width = parseInt(bar.style.width.replace("%", "")) + steps + "%"
        if(bar.style.width === "100%"){
          clearInterval(intervalID)
          setTimeout(true)
          document.querySelector("#keyboard").style.opacity = 0.3
          document.querySelector(".paragraph").style.opacity = 0.3
        }
      }, intervalTime)
  }, [])


  const handleCallbackLetter = (letter) => {
    if(!timeOut){
      if(letter !== 'Enter'){
        updateWord(prev => prev+letter)
      } else {
        let arrIndex = arrayOfWords.findIndex((arrWord) => {
          return arrWord.trim() === word
        })
        if(arrIndex >= 0){
          let newArray = [...arrayOfWords]
          newArray.splice(arrIndex, 1)
          setArrayOfWords(newArray)
          updateScore(prev => prev + word.length)
        }
        updateWord("")
      }
    } 
  }

  return (
    <div className="App">
      <div className="timer">
          <div className="bar"></div>
      </div>
      {timeOut && (
          <span className="timeout">
            <span>Time's up</span>
            <span>{score}</span>
          </span>
      )}
      <div className="paragraph">
          {
            arrayOfWords.map((char, index) => {
              return <span className="char" id={`char-${index}`} key={index}>{`${char} `}</span>
            })
          }
      </div>
      <div className="score">
          <div>{score}</div>
          <div style={{height: "1em"}}>{word}</div>
      </div>
      <Keyboard callback={handleCallbackLetter} />
    </div>
  );
}

export default App;
