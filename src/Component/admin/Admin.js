import React from 'react';
import fakeData from '../../fakeData/fakeData';

const Admin = () => {
    const handleAddService=()=>{
        fetch('https://cryptic-citadel-75007.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <h1>admin page is on process..</h1>
            <button onclick={handleAddService()}>add product</button>
           
        </div>
    );
};

export default Admin;