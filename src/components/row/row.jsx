import React from 'react'
import Letter from '../letter/letter'
import './styles.css'

const Row = (props) => {
    return (
        <div className="row">
            {
                props.letters.map((letter, index) => {
                    return <Letter key={index} letter={letter} />
                })
            }
        </div>
    )
}

export default Row