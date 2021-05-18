import React  from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const QuoteContainer = styled.div`
    margin: 2rem;
    padding: 3rem;
    border-radius: .5rem;
    background-color: #ffffff;
    max-width: 600px;
    @media (min-width: 992px){
        margin-top: 5rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{ 
        font-family: Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }


`

const Quote = ({phrase}) => {
    return (
        
        <QuoteContainer>
            <h1>{phrase.quote}</h1>
            <p>{phrase.character}</p>
        </QuoteContainer>
        
     );
}
 
Quote.propTypes ={
    titulo: PropTypes.string.isRequired
}
export default Quote;

