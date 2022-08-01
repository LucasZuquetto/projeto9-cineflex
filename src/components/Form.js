import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"


//terminar formulario
//terminar footer

export default function Form ({ids}){
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    let navigate = useNavigate()
    

    function sendData(event){
        event.preventDefault()
        
        const UserData = {
            ids: ids ,
            name: name ,
            cpf:cpf ,
        }
    
        const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', UserData)
        request.then(() => navigate('/sucesso'))

    }
    
    return(
        <Forms onSubmit={sendData}>
            <label for='name'>Nome do comprador:</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Digite seu nome..." required/>
            <label for='cpf'>CPF do comprador:</label>
            <input type='number' value={cpf} onChange={e => setCpf(e.target.value)} id='cpf' placeholder="Digite seu CPF..." required/>
            <button type="submit">Reservar assento(s)</button>
        </Forms>
    )
}
const Forms = styled.form`
    display: flex;
    flex-direction: column;
    margin: 42px 24px;
    color: #293845;
    font-size: 18px;
    input{
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
        margin-top: 2px;
        font-size: 20px;
        color: black;
        padding-left: 8px ;
    }
    input::placeholder{
        color: #AFAFAF;
        font-size: 18px;
        padding-left: 10px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        background-color: #E8833A;
        margin: 40px 60px;
        height: 50px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
    }
    button:hover{
        filter: contrast(85%);
        cursor: pointer;
    }
`