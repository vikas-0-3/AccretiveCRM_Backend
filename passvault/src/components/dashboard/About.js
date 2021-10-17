import React from 'react'

const About = () => {

    const updateInfo = () => {
        alert("Update user info api call");
    }

    const addContact = () => {
        alert("add contact api call");
    }

    return (
        <div className="col-sm bg-light p-4">
            <div className="container-fluid row p-4">
                <div className="col-sm bg-white m-3 p-4">
                    <div className="text-center">
                        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="rounded-circle" alt="Userimage" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <br />
                    <div className="container justify-content-center">
                        <div className="col-12 bg-white p-4" >
                            <h5>Email : vg1231923@gmail.com</h5>
                            <h5>Username : vikas</h5>
                            <h5>Phone : 9643460132</h5>
                        </div>
                        <br />
                        <button className="form-control btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">Update </button>
                    </div>
                </div>
                <div className="col-sm bg-white m-3 px-4 maincontactdiv">

                    <div className="sticky-top bg-white">
                        <h3 className="text-center fw-bold py-1">My Contacts</h3>
                    </div>

                    <div className="card p-3 my-2 fw-bold">
                        vg1231923@gmail.com
                    </div>

                    <div className="card p-3 fw-bold">
                        vg1231923@gmail.com
                    </div>

                    <button className="form-control my-2 btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Contact </button>


                </div>
            </div>



            {/* add contact part here */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST">
                            <div className="modal-body">
                                <input type="email" className="form-control" placeholder="Contact" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={addContact}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* update user info here */}

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Update info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control m-2" placeholder="username" name="username" />
                            <input type="email" className="form-control m-2" placeholder="email address" name="email" />
                            <input type="number" className="form-control m-2" placeholder="phone number" name="phone" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={updateInfo}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
