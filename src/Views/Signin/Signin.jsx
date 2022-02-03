import { useState } from "react";
import { signin } from "../../Services/auth-firebase.service";

import './Signin.css';

function Signin(){ 
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signin(loginEmail,loginPassword);
            console.log(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="content-signup">
            <h1>Sign In</h1>
            <form>
                <label>email</label>
                <input type="text" 
                    placeholder="your email" 
                    onChange={(e) => {
                        setLoginEmail(e.target.value)
                    }}
                />

                <label>password</label>
                <input type="password" 
                    placeholder="your password" 
                    onChange={(e) => {
                        setLoginPassword(e.target.value)
                    }} 
                />
            </form>

            <button onClick={login}>Connexion</button>
        </div>
    );

}

export default Signin;