import React from "react";
import styled from "styled-components";
import { About } from '../styles';
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {

    return (
        <Faq>
        <AnimateSharedLayout>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem smth else, actually this space should contain an answer.</p>
                </div>
            </Toggle>
            <Toggle title='Daily Schedule'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem smth else, actually this space should contain an answer.</p>
                </div>
            </Toggle>
            <Toggle title='Different Payment Methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem smth else, actually this space should contain an answer.</p>
                </div>
            </Toggle>
            <Toggle title='What Products Do You offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem smth else, actually this space should contain an answer.</p>
                </div>
            </Toggle>
        </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        font-weight: lighter;
        padding: 0rem 0rem 2rem;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        cursor: pointer;
        padding: 3rem 0rem;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;