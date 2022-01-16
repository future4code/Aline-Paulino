import logo from './componentes/img/logo.png';
import iconeAmigo from './componentes/img/icone-amigos.png';
import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import PerfilCard from './componentes/PerfilCard'
import Lista from './componentes/Lista'

const Container = styled.div`
height: 525px;
width: 380px;
border: 1px solid black;
border-radius: 10px;
display: flex;
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
margin-left: 130px;
`
const ImgIcon = styled.img`
height: 30px;
margin: 10px;
`

function App() {
  const [telaAtual, setTelaAtual] = useState('PerfilCard')
  const escolheTela = () => {
    if (telaAtual === 'PerfilCard'){
      return <PerfilCard/>
    } else {
      return <Lista/>
    }
  }
  const mudaTela = () => {
    telaAtual === 'PerfilCard' ? setTelaAtual('Lista'): setTelaAtual('PerfilCard')
  }



  return (
    <Container>
      <Header>
        <ImgLogo src={logo}/><ImgIcon onClick={mudaTela} src={iconeAmigo}/>
      </Header>
      {escolheTela()}
    </Container>
  );
}

export default App;
//ERROS DE COMMIT