import React, { useState, useEffect } from 'react';
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
const LikeDeslike = styled.div`
display: flex;
justify-content: space-between;
margin: 0 5em;
`
const Photo = styled.img`
height: 90%;
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
`
const SimNao = styled.img`
height: 3em;
width: 3em;
`
const PerfilCard = () => {

    const [perfil, setPerfil] = useState({})
    const buscaPerfil = async () => {
        let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/A/person")
        try {
            console.log("Ok")
            setPerfil(res.data.profile)
        } catch (erro) { console.log("Erro") }
    }

    const Amei = async () => {
        let url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/A/choose-person'
        let header = {
            Headers: {
                "Content-Type":
                    "application/json"
            }
        }

        let body = {
            'id': `${perfil.id}`,
            "choice": true
        }
        let requisicao = await axios.post(url, body, header)
        try {
            console.log('Enviado')
            buscaPerfil()
        } catch(err){
            console.log('Erro',err)
        }
    }
    useEffect(buscaPerfil, [])
    return (
        <CardContainer>
            <Photo src={perfil.photo} />
            <Descricao>
                <h2>{perfil.name},{perfil.age}</h2>
                <p>{perfil.bio}</p>
            </Descricao>
            <LikeDeslike>
                <SimNao onClick={buscaPerfil} src={nao} /><SimNao onClick={Amei} src={sim} />
            </LikeDeslike>
        </CardContainer>
    )
}
export default PerfilCard
 