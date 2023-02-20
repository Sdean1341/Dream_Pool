import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './add.css';
import { Link } from 'react-router-dom';


const Update = (props) => {
    const { id } = useParams();
    const {dream, setDream} = props;
    const [title, setTitle] = useState(""); 
    const [plot, setPlot] = useState("");
    const [setting, setSetting] = useState("");
    const [peopleInvolved, setPeopleInvolved] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/dream/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPlot(res.data.plot);
                setSetting(res.data.setting);
                setPeopleInvolved(res.data.peopleInvolved);
                setOtherDetails(res.data.otherDetails);
            })
            .catch(err => console.log(err))
    }, [])
    const updateDream = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/dream/' + id, {
            title,
            plot,
            setting,
            peopleInvolved,
            otherDetails
        })
            .then(res => {
                console.log(res);
                navigate("/dream");
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.error.errors)
                })
    }
    return (
        <div className='container2'>
            <h1>Update Entry</h1>
            <form onSubmit={updateDream}>
            <p>
                <label className='label'>Title </label><br/>
                <input className='title' type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                {errors.title ? 
                <p>{errors.title.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Setting </label><br/>
                <input className='setting' type="text" value={setting} onChange = {(e)=>setSetting(e.target.value)}/>
                {errors.setting ? 
                <p>{errors.setting.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Plot </label><br/>
                <textarea className='plot' type="text" value={plot} onChange = {(e)=>setPlot(e.target.value)}/>
                {errors.plot ? 
                <p>{errors.plot.message}</p>
                : null}
            </p>
            <p>
                <label className='label'>Who was in it? </label><br/>
                <textarea className='people' type="text" value={peopleInvolved} onChange = {(e)=>setPeopleInvolved(e.target.value)}/>
                {errors.peopleInvolved ?
                <p>{errors.peopleInvolved.message}</p>
                : null}
            </p>
            <p>
            <label className='label'>Anything else you'd like to add? </label><br/>
                <textarea className='area' type="text" placeholder='how it made you feel, why you think you had it, etc...' 
                value={otherDetails} onChange = {(e)=>setOtherDetails(e.target.value)}/>
            </p>
                    <input className='submit1' type="submit" />
            </form>
        </div>
    )
}
export default Update;