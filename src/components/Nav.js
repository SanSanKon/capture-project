import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to='/'>
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>
                        1. About Us
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to='/work'>
                        2. Our Work
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/work' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to='/contact'>
                        3. Contact Us
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    align-items: center;
    background: #282828;
    display: flex;
    justify-content: space-between;
    margin: auto;
    min-height: 10vh;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-family: "Lobster", cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 2rem;
        }
        ul{
            justify-content: space-around;
            padding: 2rem;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`;

const Line = styled(motion.div)`
    background: #23d997;
    bottom: -80%;
    height: 0.3rem;
    left: 60%;
    position: absolute;
    width: 0%;
    @media screen and (max-width: 1300px) {
        left: 0%;
  }
`;

export default Nav;