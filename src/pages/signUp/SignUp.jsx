import React, {useState} from 'react';
import "./SignUp.scss";

import {
    createUserAuthEmailAndPassword,
    createUserDocumentForAuth,
} from "../../utils/firebase/firebaseUtils";

const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUp = () => {

    const [formData, setFormData] = useState(initialFormFields);
    const { displayName, email, password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); 
    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createUserAuthEmailAndPassword(
                email,
                password
            ); 
           await createUserDocumentForAuth(user, {displayName})
           setFormData(initialFormFields);
        } catch (error) {
           alert(error.code);
        }

    }

    return (
        <div>
            <h1>Sign up with your Email and Password</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Display Name</label>
                <input
                    value={displayName}
                    name="displayName"
                    type="text"
                    required
                    onChange={handleOnChange}
                />
                <label>Email</label>
                <input 
                    value={email}
                    name="email"
                    type="email"
                    required
                    onChange={handleOnChange}
                />
                <label>Password</label>
                <input 
                    value={password}
                    name="password"
                    type="password"
                    required
                    onChange={handleOnChange}
                />
                <label>Confirm</label>
                <input 
                    value={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    required
                    onChange={handleOnChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;