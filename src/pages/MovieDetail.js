import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useLocation} from 'react-router-dom';
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import {pageAnimation} from '../animation';


const MovieDetail = () => {
    const url = useLocation();
    // history.location.path
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url.pathname);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    console.log(url);


    return (
        <>
        { movie && (
        <Details
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
        >
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie"/>
            </HeadLine>
            <Awards>
                {movie.awards.map((award) => (
                    <Award 
                        title={award.title} 
                        description={award.description} 
                        key={award.title} 
                    />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="movie"/>
            </ImageDisplay>
        </Details>
        )}
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        color: white;
        left: 50%;
        position: absolute;
        top: 10%;
        transform: translate(-50%, -10%);
    }
    img {
        height: 70vh;
        object-fit: cover;
        width: 100%;
    }
`;

const Awards = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 5rem 10rem;
    min-height: 80vh;
    @media screen and (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
        width: 100%;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        height: 100vh;
        object-fit: cover;
        width: 100%;
    }
`;

//Award component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};

export default MovieDetail;

//https://www.reddit.com/r/reactjs/comments/qqg0gz/typeerror_cannot_read_properties_of_undefined/