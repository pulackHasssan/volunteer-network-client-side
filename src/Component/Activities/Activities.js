import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://cryptic-citadel-75007.herokuapp.com/userActivities?email='+ loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        })
        .then(res=>res.json())
        .then(data=>{
            setActivities(data)
        })
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <br/>
            <br/>
          <h2>Welcome, {loggedInUser.userName},  You are active in : {activities.length} services.</h2>
          {
              activities.map(activity => <div>
                  <p>{activity.register.service}</p> 
                  <small>Starts at: {activity.register.date}</small>
              </div>)
          }

        </div>
    );
};

export default Activities;