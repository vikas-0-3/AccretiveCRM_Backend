import React from 'react'

const Register = () => {
    return (
        <div className="col-6 p-0">

        <div className="bg-light h-100 p-4 shadow-sm" >
            

            <div className="m-4 p-4 ">
            <h3 className="text-center fw-bold">Create an account</h3>
                <form method="POST">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="form-control btn btn-success">Submit</button>
                    </div>
                </form>

            </div>
        </div>

    </div>
    )
}

export default Register
