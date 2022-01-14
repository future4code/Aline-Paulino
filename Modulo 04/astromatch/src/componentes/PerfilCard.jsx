import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import sim from './img/sim.png';
import nao from './img/nao.png';

const CardContainer = styled.div`
height: 450px;
width: 350px;
border-radius: 10px;
position: relative;
`
const Photo = styled.img`
height: 80%;
width: 100%;
border-radius: 10px;
`
const Descricao = styled.div`
color: white;
display:flex;
flex-direction: column;
z-index: 2;
position: absolute;
&>h2{
    margin:0;
}
top: 16.5em;
&>p{
font-size: 20px;
}
margin: 0 15px;
&>div{
    display: flex;
    justify-content: space-around;
}
`
const SimNao = styled.img`
height: 3em;
width: 3em;
`
export default function PerfilCard (){
    const [perfil, setPerfil] = useState({})
    const buscaPerfil = async() => {
        let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alinePaulino/person")
        try{console.log("Ok")
        setPerfil(res.data.profile)}catch(erro){console.log("Erro")}
    }
    useEffect(buscaPerfil, [])
    return(
        <CardContainer>
            <Photo src={perfil.photo}/>
            <Descricao>
                <h2>{perfil.name},{perfil.age}</h2>
                <p>{perfil.bio}</p>
                <div>
                    <SimNao src={nao} /><SimNao src={sim}/>
                </div>
            </Descricao>
        </CardContainer>
    )
}
