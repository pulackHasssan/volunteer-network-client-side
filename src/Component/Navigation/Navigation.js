import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import './Navigation.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="nav">
            <ul>
                <li className='logo'><img src="https://i.ibb.co/cYzjzr5/Group-1329.png" alt="Logo"/></li>
               
                <li><Link to="/home">Home</Link></li>
                <li>donation</li>
                <li>blogs</li>
                <li>Events</li>
                <li><Link to="/register"><Button variant="contained" color="primary">Register</Button></Link></li>
                <li><Link to="/admin"><Button variant="contained" color="dark">Admin</Button></Link></li>
                <li><strong>{loggedInUser.userName}</strong></li>
            </ul>
            
        </div>
    );
};

export default Navigation;