import React from 'react'

const Passcard = (props) => {
    return (
        
          
            <div className="card m-2 col-sm-2" id="password_cards" >
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <hr />
                    <h6 className="card-subtitle mb-2 text-muted">Username : {props.username}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Date : {props.date}</h6>
                </div>
            </div>

    )
}

export default Passcard
