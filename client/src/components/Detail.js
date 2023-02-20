import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './detail.css'
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    }
}
const Detail = (props) => {
    const [dream, setDream] = useState({})
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deleteDream = (dreamId) =>{
        setIsLoading(true)
        axios.delete('http://localhost:8000/api/dream/' + dreamId)
            .then(res => {;
                setIsLoading(false);
                alert("successfully deleted entry");
                navigate('/dream')
                
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/dream/" + id)
            .then( res => {
                console.log(res.data);
                setDream(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <div className='container3'>
            <h1 className='title1'>{dream.title}</h1>
            <h3 className='header3'>Created on: {dream.createdAt}</h3> 
            <Paper className='journal' elevation={10} style={styles.paper}>
            <p className='plot1'>Plot: {dream.plot}</p>
            <p className='people1'>People Involved: {dream.peopleInvolved}</p>
            <p className='setting1'>Setting: {dream.setting}</p>
            <p className='other'>Other details: {dream.otherDetails}</p>
            <Link className='back' to='/dream/'>Back</Link>
            <Link className='edit_link' to={`/dream/edit/${dream._id}`}> Edit </Link> <br/>
            { !isLoading && <button className='btn' onClick={() => deleteDream(dream._id)}>Delete Entry </button> }
            </Paper>
        </div>
    );
}
export default Detail;
