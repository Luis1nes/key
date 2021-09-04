import React, {useLayoutEffect} from 'react'
import Row from '../row/row'
import Letter from '../letter/letter'
import './styles.css'

let letters = {
    firstRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    secondRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    thirdRow: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
}

const Keyboard = () => {

    useLayoutEffect(() => {
        let reg = /^[a-zA-Z]$/i
        let keyboard = document.querySelector('#keyboard')
        document.onkeydown = function(e) {
            if(reg.test(e.key) || e.code === "Space"){
                let key;
                if(e.code === "Space"){
                    key = keyboard.querySelector(`.SPACE`)
                } else {
                    key = keyboard.querySelector(`.${e.key.toUpperCase()}`)
                }
                key.style.color = 'black'
                key.style.backgroundColor = "white"
            }
        }

        document.onkeyup = function(e){
            if(reg.test(e.key) || e.code === "Space"){
                let key;
                if(e.code === "Space"){
                    key = keyboard.querySelector(`.SPACE`)
                } else {
                    key = keyboard.querySelector(`.${e.key.toUpperCase()}`)
                }
                key.style.color = 'white'
                key.style.backgroundColor = "black"
            }
        }

    }, [])


    return (
        <div id="keyboard">
        {
            Object.keys(letters).map((key, index) => {
            return <Row key={index} letters={letters[key]} />
            })
        }
        <Letter letter={"SPACE"} />
        </div>
    )
}

export default Keyboard