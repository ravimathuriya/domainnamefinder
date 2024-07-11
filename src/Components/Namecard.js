import React from 'react'

function Namecard({ suggestedName }) {

    const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

    return (
        <div className="d-flex justify-content-center">
            <ul className="list-group mt-5 d-flex justify-content-center">
                <li className="list-group-item mx-3">
                    <div>
                        <a href={`${nameCheapUrl}${suggestedName}`} className="ml-2 my-2" target="_blank" rel="noreferrer">
                            <h4 className="mb-0">{suggestedName}</h4>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Namecard
