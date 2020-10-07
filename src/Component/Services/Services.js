import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
    const [serves, setServes] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-citadel-75007.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServes(data))
    },[]);
    return (
        <div className="service-style">
           {
               serves.map(service=><SingleService service={service}></SingleService>)
           } 
        </div>
    );
};

export default Services;