import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './display.css';

const DreamJournal = (props) => {
    const { dream, setDream} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/dream/")
        .then((res)=> {
            console.log(res.data);
            setDream(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                dream.slice().reverse().map((dream, index)=>{
                    return <div key={index}>
                        <h2 className='title_h2'>{dream.title}</h2>
                        <p className='p'>Created on: {new Date(dream.createdAt).toLocaleString()} |
                        <Link className='link' to={`/dream/${dream._id}`}> Details </Link> |
                        <Link className='link' to={`/dream/edit/${dream._id}`}> edit </Link> 
                        </p></div>
                })
            }
        </div>
    )
}

export default DreamJournal;