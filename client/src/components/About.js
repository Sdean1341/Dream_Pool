import React from 'react';
import './about.css';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
const styles = {
    paper: {
        width: "40rem", padding: "1rem"
    }
}
function About() {
return (
    <div className='about_container'>
        <h1 className='h1_about'>About</h1>
        <Paper className='paragraph' elevation={10} style={styles.paper}>
        <p className='text_paragraph'>I came up with the idea for this project because I am a very active dreamer and have anywhere from 3-10 vivid dreams a night, and my dreams always make people laugh when I tell them about them.
            Although I remember a lot of my dreams, I can remember almost all of them if I write them down. I don't have the self-discipline to keep a hand-written journal, 
            and since I am on my computer throughout the day, this will be a great way for me to record them and remember them later. I hope you enjoyed this project!
            - Savannah
        </p>
        </Paper>
        <div className='bottom'>
        <p className='text_paragraph'>These famous books were inspired by dreams:   
            <Link className='book_link' to='https://www.sleepadvisor.org/books-inspired-by-dreams/'>View here</Link>
        </p>
        </div>
    </div>
);
}

export default About;
