import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../Services/auth-firebase.service';

import './Navbar.css'

import logo from '../assets/images/logoNoName.png';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../Services/config-firebase';

const auth = getAuth(app);

function Navbar() {    
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const logout = async () => {
        try {
            const success = await signout();
            console.log(success);
        } catch (error) {
            console.error(error.message);            
        }
    }

    return (
        <div>
            <header>
                <div className="left">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/signin'>sign In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>

                <div className="right">
                    <span>{user?.email}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            </header>
        </div>

    )
};

export default Navbar;