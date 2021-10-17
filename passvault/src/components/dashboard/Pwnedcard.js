import React from 'react'

const Pwnedcard = (props) => {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imageSrc} className="img-fluid rounded-start" alt="Pwned Image" style={{width:"200px"}} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <p className="card-text"><small className="text-muted">Time : {props.time}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pwnedcard
