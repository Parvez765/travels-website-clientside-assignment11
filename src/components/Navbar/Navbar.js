import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import logo from "../../images/logo.png"

const Navbar = () => {
    const { user, userLogout } = useContext(AuthProvider)

    const handleLogOut = () => {
        userLogout()
            .then(() => {
            alert("Logout Successfull")
            })
        .catch(err=> console.log(err))
    }
   
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='flex items-center justify-center'>
                            <div>
                                <img className='w-[50px]' src={logo} alt="" />
                            </div>
                            <div>
                            <h2 className='font-bold'>Parvez's Tour House</h2>
                            </div>
                        </div>
                        <hr />
                        <li><Link to="/">Home</Link></li>
                        {
                             user?.email ? <>
                                <li><Link to="/login"><button onClick={handleLogOut}>Logout</button></Link></li>
                                <li><Link to="/myreview">My Review</Link></li>
                                <li><Link to="/addservice">Add Service</Link></li>
                            </> : <li><Link to="/login">Login</Link></li>
                        }
                    
                    <li><Link to="/blog">Blog</Link></li>
                  
                </ul>
                <div className='flex items-center justify-end '>
                    </div>
                    <img className='w-[50px] hidden lg:block' src={logo} alt="" />
                    </div> 
                    <div>
                        <h2 className='font-bold hidden lg:block'>Parvez's Tour House</h2>
                    </div>
               </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    
                    {
                      user?.email ? <>
                            <li><Link to="/login"><button onClick={handleLogOut}>Logout</button></Link></li>
                            <li><Link to="/myreview">My Review</Link></li>
                            <li><Link to="/addservice">Add Service</Link></li>
                            
                    </> : <li><Link to="/login">Login</Link></li>
                    }
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;