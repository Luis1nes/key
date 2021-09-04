import React, {useLayoutEffect, useState, useRef} from 'react'
import Keyboard from './components/keyboard/keyboard';
import "./App.css"

let paragraphs = {
    title: "Physics",
    content: "Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.",
    maxTime: 10,
    level: "EASY"
  }

let arrayContent = paragraphs.content.replace(/[,.]/g, "").split("")

function App() {

  const [turn, nextTurn] = useState({letter: null, position: -1})
  const [score, updateScore] = useState(0)

  let first = useRef(true)

  useLayoutEffect(() => {
    if(first.current){
      first.current = false;
      return
    }

    console.log("L:",arrayContent[turn["position"]]);

    if(arrayContent[turn["position"]].toLowerCase() === turn['letter']){
      let letterPos = document.querySelector(`#char-${turn['position']}`)
      letterPos.style.color = '#FFFF00'
      updateScore(prev => (prev+1))
    }


  }, [turn])

  const handleCallbackLetter = (letter) => {
    nextTurn((prev) => ({...prev, letter: letter, position: prev.position + 1}))
  }

  return (
    <div className="App">
      <div className="paragraph">
          {
            arrayContent.map((char, index) => {
              return <span className="char" id={`char-${index}`} key={index}>{char}</span>
            })
          }
      </div>
      <div className="score">
          {score}
      </div>
      <Keyboard callback={handleCallbackLetter} />
    </div>
  );
}

export default App;
