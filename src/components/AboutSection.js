import React from "react";
import home1 from '../img/home1.png';

//Styles
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
};

//Styled component

const About = styled.div`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    min-height: 90vh;
    padding: 5rem 10rem;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        height: 80vh;
        object-fit: cover;
        width: 100%;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;