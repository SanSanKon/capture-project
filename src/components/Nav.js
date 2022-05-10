import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
                </li>
                <li>
                    <Link to='/work'>
                        2. Our Work
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        3. Contact Us
                    </Link>
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
`;

export default Nav;