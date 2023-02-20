import React, { useState } from 'react';
import DreamJournal from './DreamJournal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './main_style.css'
import { Paper } from '@mui/material';

const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    }
}

const Main = (props) => {
    const [dream, setDream] = useState([]);
    const deleteDream = dreamId => {
        axios.delete('http://localhost:8000/api/dream/' + dreamId)
            .then(res => {
                setDream(dream.filter(p => p._id != dreamId));
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='container'>
                <div className='about'>
                    <Link className='about_link' to='/about'>About this project</Link>
                </div>
                <h1>Welcome Back!</h1>
                <Paper className='journal' elevation={10} style={styles.paper}>
                    <Link className='add_link' to='/dream/add'>Add dream</Link>
                    <DreamJournal dream={dream} setDream={setDream} deleteDream={deleteDream}/>
                </Paper>
            </div>
        </>
    )
}

export default Main; 