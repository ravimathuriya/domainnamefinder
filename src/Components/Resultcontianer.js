import React from 'react'
import Namecard from './Namecard'

function Resultcontianer({ suggestedNames }) {
    return (

        <div className='result-container'>
            {suggestedNames.map((suggestedName) => {
                return <Namecard key={Math.random()} suggestedName={suggestedName} />
            })}
        </div>
    )
}

export default Resultcontianer
