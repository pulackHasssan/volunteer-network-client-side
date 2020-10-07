import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../../Component/Header/Header';
import Services from '../../Component/Services/Services';

const HomePage = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    return (
        <div>
            <Header></Header>
            <Services></Services>
        </div>
    );
};

export default HomePage;