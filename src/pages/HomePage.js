import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const HomePage = () => {
    const {isAuth, email} = useAuth()

    const dispatch = useDispatch()
    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button
                onClick={() => dispatch(removeUser())}
            >
                Log out from {email}
            </button>
        </div>
        ) : (
        <Navigate to={'/login'}/>

    );
};

export default HomePage;