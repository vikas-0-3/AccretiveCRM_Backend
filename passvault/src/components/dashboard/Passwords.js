import React from 'react'
import Passcard from './Passcard'

const Passwords = (props) => {
    return (
        <div className="col-sm p-2 bg-light">

            <ul class="nav justify-content-center">
                <li class="nav-item mx-2">
                    <button className="btn btn-outline-dark">Add</button>
                </li>
                <li class="nav-item mx-2">
                    <button className="btn btn-outline-dark">Import</button>
                </li>
                <li class="nav-item mx-2">
                    <button className="btn btn-outline-dark">Export</button>
                </li>
                <li class="nav-item mx-2">
                    <h4 className="mt-1">&emsp;Total Passwords : {props.totalPass} </h4> 
                </li>
            </ul>


            <div className="container-fluid row p-3 my-2 row bg-white text-center justify-content-center maindiv">


                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />

                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />

                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />

                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />

                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />
                         <Passcard title="Facebook" username="vikas" date="2020-10-16" />


               
            </div>



        </div>
    )
}

export default Passwords
