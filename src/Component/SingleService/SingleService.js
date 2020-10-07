import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const {id , name, photo} = props.service; 
    return (
           <Link to="/register" className='single-service-button'>
            <div className="single-service-style">
               <img src={photo} alt={id}/>
               <h2>{name}</h2>
               </div>
           </Link>
  
 
    );
};

export default SingleService;