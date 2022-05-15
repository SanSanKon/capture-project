import React from 'react';
//Animations
import { motion } from "framer-motion";
import {pageAnimation, titleAnimation} from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
      style={{ background: '#FFF' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send An Email.</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Social Media</h2>
        </Social>
      </Hide>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  padding: 5rem 10rem;
  @media screen and (max-width: 1500px) {
    font-size: 1rem;
    padding: 2rem;
  }
`;

const Title = styled.div`
  color: black;
  margin-bottom: 4rem;
  @media screen and (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  background: #353535;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
`;

const Social = styled(motion.div)`
  align-items: center;
  display: flex;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
