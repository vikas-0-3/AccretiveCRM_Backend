import React from 'react'
import {Link} from "react-router-dom";

const Sidenav = () => {
    const logOut = () => {
        alert("Logout api call here")
    }
    const downloadUserfile = () => {
        alert("Download user file part here");
    }
    return (
        <div className="card" style={{ width: "15rem" }} id="side_nav">
            <h3 className="my-1 text-center text-white">Pass Vault</h3>
            <br />
            <div className="my-4" id="links">
                <Link className="text-white" to="dashboard"><p className="p-2">Passwords</p></Link>
                <Link className="text-white" to="pwnedaccounts"><p className="p-2">Pwned Accounts</p></Link>
                <Link className="text-white" to="myaccount"><p className="p-2">My Account</p></Link>
                <Link className="text-white" to="#" onClick={downloadUserfile}><p className="p-2">Download Userfile</p></Link>
                <Link className="text-white" to="#" onClick={logOut}><p className="p-2">Logout </p></Link>
            </div>

        </div>
    )
}

export default Sidenav
