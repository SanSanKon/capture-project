import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from "framer-motion";
import {slider, pageAnimation, fade, photoAnimation, lineAnimation} from '../animation';

const OurWork = () => {
    return (
        <Work
            style={{ background: '#FFF' }}
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
        >
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className='line'></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className='line'></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt='racer' />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className='line'></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt='good times' />
                </Link>
            </Movie>
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        color: black;
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        background: #23d997;
        height: 0.5rem;
        margin-bottom: 3rem;
    }
    img {
        height: 70vh;
        object-fit: cover;
        width: 100%;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    background: #fffebf;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 10%;
    width: 100%;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;