import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const CardContainer = styled.div`
height: 450px;
width: 350px;
border: 1px solid black;
border-radius: 10px;
`

export default function PerfilCard (){
    const [perfil, setPerfil] = useState({})
    // const buscaPerfil = async() => {
    //     let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
    //     try{console.log("Ok")
    //     setPerfil(res.data.profile)}catch(erro){console.log("Erro")}
    // }
    // useEffect(buscaPerfil, [])
    return(
        <CardContainer>
            {/* <h2>{perfil.profile.name}</h2> */}
        </CardContainer>
    )
    
}