import React from 'react';
import {Link} from "react-router-dom";
import {SingUp} from "../components/SingUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SingUp/>
            <p>already have an account <Link to={'/login'}>Sing In</Link></p>
        </div>
    );
};

export default RegisterPage;