import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";

import {Form} from "./Form";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";

const SingUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        // console.log(auth, 'auth')
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
              navigate('/')
            })
            .catch(console.error)
    }
    return (
        <Form
        title={"register"}
        handleClick={handleRegister}
        />
    );
};

export {SingUp};