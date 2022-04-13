import React from 'react';
import { signInWithGooglePopup, createUserDocumentForAuth } from "../../utils/firebase/firebaseUtils";

import "./SignIn.scss";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =await createUserDocumentForAuth(user);
    }

    return (
        <div>
            Sign in Page
            <button onClick={logGoogleUser}>Sing in with google</button>
        </div>
    );
};

export default SignIn;