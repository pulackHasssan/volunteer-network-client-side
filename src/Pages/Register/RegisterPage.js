import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Register from '../../Component/Register/Register';

const RegisterPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Register></Register>
        </div>
    );
};

export default RegisterPage;