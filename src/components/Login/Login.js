import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

const Login = () => {

    const { loginWithExistingUser, loginWithGoogle } = useContext(AuthProvider)

    const googleProvider = new GoogleAuthProvider()

    const handleOnSubmit = event => {
        event.preventDefault()
        const form = event.target
        
        const email = form.email.value
        const password = form.password.value

        loginWithExistingUser(email, password)
            .then(result => {
                const user = result.user
                alert("User Logged In Successfully")
                form.reset()
            })
            .catch(err => console.error(err))
        
            loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                alert("User Created Successfully")
            })
        .catch(err=> console.error(err))
       
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                <form onSubmit={handleOnSubmit}>
                   
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
                    
                    </div>
                    
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login Now</button>
                        </div>
                            <button  className='googleIcon'>
                            <FaGoogle></FaGoogle>
                            </button>
                        <Link to="/register">
                        <button className="btn btn-link">New To This Website?</button>
                        </Link>
                </form>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Login;