import { useState } from "react";
import { signup } from "../../Services/auth-firebase.service";

import './Signup.css';

function Signup(){ 
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await signup(registerEmail,registerPassword);
            console.log(user);
        } catch (error) {
            console.error(error.message);
        }
    }    

    return (
        <div className="content-signup">
            <h1>Sign Up</h1>
            <form>
                <label>email</label>
                <input type="text" 
                    placeholder="your email" 
                    onChange={(e) => {
                        setRegisterEmail(e.target.value)
                    }}
                />

                <label>password</label>
                <input type="password" 
                    placeholder="your password" 
                    onChange={(e) => {
                        setRegisterPassword(e.target.value)
                    }}
                />
            </form>

            <button onClick={register}> Create account</button>
        </div>
    );
}

export default Signup;