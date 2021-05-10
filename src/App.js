import React, {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import Quote from "./components/Quote";
import imagen from "./logo.webp";


const Button = styled.button`
background: -webkit-linear-gradient(top left, #a85400 0%, #a85400 40%, #804000 100%);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #ffffff;
margin-top: 3 rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size .8s ease;
:hover{
  cursor:pointer;
  background-size: 400px;

}
`;

const Imagen = styled.img`
  align: center-top;
  max-width: 350px;

`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {  

  //state de frase
  const [phrase, getQuote] = useState({});
  
  const callAPI = async () => {
    const api = await fetch("https://got-quotes.herokuapp.com/quotes")
    const phrase = await api.json()
    getQuote(phrase)
  }

  //Cargar una frase
  useEffect( ()=>{
    callAPI();
  }, [])

  return (
    <Container>
        <Imagen 
          src={imagen}
          alt="logo"
        />
        <Quote 
          phrase={phrase}
        />
        <Button
          onClick={callAPI}
        >
          Get Quote
        </Button>
    </Container>
  );
}

export default App;
