import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Register.css";

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data =>{
        const registerDetails = {...loggedInUser, register: data}
        fetch('https://cryptic-citadel-75007.herokuapp.com/addUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(registerDetails)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data){
                        alert('volunteer added successfully')
                    }
                })
    }

    return (
        <div className="log-in-style">
           <Link to='/home'> <img src="https://i.ibb.co/cYzjzr5/Group-1329.png" alt="Logo"/></Link>
            <div className="register-box">
                <h1>Register as a Volunteer</h1>
                 <p>Signed in as <strong>{loggedInUser.email}</strong></p>
                <form onSubmit={handleSubmit(onSubmit)} action="" method="">
                <input className="register-input" type="text" placeholder="Full Name" name="name" defaultValue={loggedInUser.userName} ref={register({ required: true })}/>
                <br/>
                {errors.name && <span style={{color:'red'}}>This field is required</span>}
                <br/>
                <input className="register-input" type="text" placeholder="Email" name='email' defaultValue={loggedInUser.email}/>
                <br/>
                {errors.email && <span style={{color:'red'}}>This field is required</span>}
                <br/>
                <input className="register-input" type="date" placeholder="Date" name='date' ref={register({ required: true })} />
                <br/>
                {errors.date && <span style={{color:'red'}}>This field is required</span>}
                <br/>
                <input className="register-input" type="text" placeholder="Description" name='description' ref={register({ required: true })} />
                <br/>
                {errors.description && <span style={{color:'red'}}>This field is required</span>}
                <br/>
                <input className="register-input" type="text" placeholder="Service Name" name="service" ref={register({ required: true })} />
                <br/>
                {errors.service && <span style={{color:'red'}}>This field is required</span>}
                <br/>
                <br/>
                <input className="register-submit" type="submit" value="Register" />
                </form>
                <br/>
                <Link to="/activities">See your Current Activities.</Link>

            </div>

        </div>
    );
};

export default Register;