import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
height: 430px;
width: 380px;
border: 1px solid black;
border-radius: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
overflow: auto;
`
let Botao = styled.button`
opacity: 85%;
border-radius: 10px;
border: none;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
cursor: pointer;
font-size: 12px;
font-weight: 700;
padding: 7px 20px;
background-color: #25c29b;
color: black;
&:hover{
    opacity: 1;
    transform: scale(0.98);
}
&:active{
    opacity: 0.7;
}
margin-top: 5px`

const Foto = styled.img`
width: 50px;
height: 50px;
margin: 5px 10px;
border-radius: 50%
`
const Matches = styled.div`
display: flex;
height: 70px;
width: 350px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
const Lista = () => {
    const [lista, setLista] = useState([])

    const pegaLista = async () => {
        let lista = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/A/matches')
        try {
            setLista(lista.data.matches)
            console.log('Deu Certo', lista)
        }
        catch (err) { console.log('Erro', err) }

    }
    const limparLista = async () => {
        let URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/A/clear"

        let body = {
            "id": "PatusZf4mHH6UoZfYC8I"
        };

        let header = { headers: { "Content-Type": "application/json" } }
        let requisicao = await axios.put(URL,body,header)
        try {console.log('lista limpa')
        pegaLista()

        }
        catch(err){console.log('Lista não limpa', err)

        }
    }
    useEffect(pegaLista, [])
    let listaMapeada = lista.map((matches) => {

        return (
            <Matches key={matches.id} >
                <Foto src={matches.photo} />
                <p>{matches.name}, {matches.age}</p>
            </Matches>
        )
    })
    return (<>
        <Container>
            <h3>{listaMapeada.length} matches</h3>
            {listaMapeada}
        </Container>
        <Botao onClick = {limparLista} >Limpar Lista</Botao>
    </>)
}


export default Lista
