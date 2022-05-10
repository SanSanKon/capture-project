import styled from "styled-components";

export const About = styled.div`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    min-height: 90vh;
    padding: 5rem 10rem;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        height: 80vh;
        object-fit: cover;
        width: 100%;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;