import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    useTitle("Login")

    const { loginWithExistingUser, loginWithGoogle } = useContext(AuthProvider)

    const [spinner, setSpinner] = useState(false)

    const googleProvider = new GoogleAuthProvider()

    const handleOnSubmit = event => {
        event.preventDefault()
        const form = event.target
        
        const email = form.email.value
        const password = form.password.value

        loginWithExistingUser(email, password)
            .then(result => {
                const user = result.user

                const currentUser = {
                    email: user.email
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'Success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })

                fetch(`https://assignment11-server-side.vercel.app/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(currentUser )
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("accessToken", data.token)
                    })
                

                navigate(from, {replace:true})
                form.reset()
            })
            .catch(err => console.error(err))
        }
    
        const handleGoogleLogin = () => {
            
            loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                alert("User Created Successfully")

                fetch(`https://assignment11-server-side.vercel.app/jwt`, {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("accessToken", data.token)
                    })

                navigate(from, {replace:true})
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
                                <button className="btn btn-primary" onClick={() => setSpinner(true)}>
                                    {
                                        spinner ? <div className='flex justify-center items-center mb-5'>
                                        <span class="flex h-3 w-3">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                    </div> : "Login Now"
                                    }
                                    </button>
                        </div>
                        <Link to="/register">
                        <button className="btn btn-link">New To This Website?</button>
                        </Link>
                    </form>
                            <button onClick={handleGoogleLogin}   className='googleIcon'>
                            <FaGoogle></FaGoogle>
                            </button>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Login;