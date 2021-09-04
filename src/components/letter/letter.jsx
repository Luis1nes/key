import React from 'react'
import './styles.css'

const Letter = (props) => {
    return <div className={`letter ${props.letter}`}>{props.letter}</div>
}

export default Letter