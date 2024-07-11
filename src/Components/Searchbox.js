import React from 'react'


function Searchbox({ onInputChnage }) {
    return (
        <>
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-8">
                        <div className="search">
                            <input type="text" className="form-control mx-1" placeholder="Search keywords" onChange={(event) => onInputChnage(event.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbox
