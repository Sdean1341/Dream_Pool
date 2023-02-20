import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add.css';

const AddDream = (props) => {
    const {dream, setDream} = props;
    const [title, setTitle] = useState(""); 
    const [plot, setPlot] = useState("");
    const [setting, setSetting] = useState("");
    const [peopleInvolved, setPeopleInvolved] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/dream/', {
            title,
            plot,
            setting,
            peopleInvolved,
            otherDetails,
            createdAt: new Date().toLocaleString()
        })
            .then(res=>{
                console.log(res);
                navigate("/dream");
                console.log(res.data);
                setDream([res.data.dream, ...dream]);
                console.log(dream);
            })
            .catch(err=> {
            console.log(err.response.data);
            setErrors(err.response.data.error.errors)
        });
    }
    
    return (
        <div className='container2'>
            <h1> New Entry</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className='label'>Title </label><br/>
                <input className='title' placeholder='Be creative! How will you remember this dream?' type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                {errors.title ? 
                <p>{errors.title.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Setting </label><br/>
                <input className='setting' placeholder='Where were you at?' type="text" value={setting} onChange = {(e)=>setSetting(e.target.value)}/>
                {errors.setting ? 
                <p>{errors.setting.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Plot </label><br/>
                <textarea className='plot' placeholder='What happened? Describe every detail you remember...' type="text" value={plot} onChange = {(e)=>setPlot(e.target.value)}/>
                {errors.plot ? 
                <p>{errors.plot.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Who was in it? </label><br/>
                <textarea className='people' type="text" placeholder='e.g. myself, grandpa, and a crowd of strangers...' value={peopleInvolved} onChange = {(e)=>setPeopleInvolved(e.target.value)}/>
                {errors.peopleInvolved ?
                <p>{errors.peopleInvolved.message}</p>
                : null}
            </p>
            <p>
            <label className='label'>Anything else you'd like to add? </label><br/>
                <textarea className='area' type="text" placeholder='How it made you feel, why you think you had it, what dream interpreters say, etc...' 
                value={otherDetails} onChange = {(e)=>setOtherDetails(e.target.value)}/>
            </p>
            <button className='submit' type="submit">Add Entry</button>
        </form>
        </div>
    )
}
export default AddDream;