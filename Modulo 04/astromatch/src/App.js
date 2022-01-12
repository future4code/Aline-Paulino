import logo from './componentes/img/logo.png';
import iconeAmigo from './componentes/img/icone-amigos.png';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import PerfilCard from './componentes/PerfilCard'

const Container = styled.div`
height: 525px;
width: 380px;
border: 1px solid black;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2em;
margin-left: 36.5vw;
`
const Header = styled.header`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const ImgLogo = styled.img`
height: 40px;
margin-left: 115px;
`
const ImgIcon = styled.img`
height: 30px;
margin: 10px;
`

function App() {
  return (
    <Container>
      <Header>
        <ImgLogo src={logo}/><ImgIcon src={iconeAmigo}/>
      </Header>
      <PerfilCard/>
    </Container>
  );
}

export default App;
