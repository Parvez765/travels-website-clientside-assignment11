import React from 'react';

const Register = () => {

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.taget
        const name = form.name.target
        const email = form.email.target
        const password = form.password.target
        const confirmpassword = form.confirm.target

        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleOnSubmit}>
                        <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        <label className="label">
                            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm" placeholder="password" className="input input-bordered" />
                        <label className="label">
                         
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register Now</button>
                        </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;