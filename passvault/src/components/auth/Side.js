import React from 'react'
import {Link} from "react-router-dom";

const Side = (props) => {
    return (
        <div className="col-6 p-4" id="colordiv">
            <h1 className="text-center fw-bold text-white">{props.message}</h1>
            <p className="text-center text-white fw-bold">{props.message2}</p>
            <div className="text-center">
                <Link to={props.redirect} className="btn btn-outline-light" >{props.buttonText}</Link>
            </div>
        </div>
    )
}

export default Side
