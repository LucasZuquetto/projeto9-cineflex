import styled from "styled-components"

function sendData(event){
    event.preventDefault()
}

export default function Form (){
    return(
        <Forms onSubmit={sendData}>
            <label for='name'>Nome do comprador:</label>
            <input type='text' id="name" placeholder="Digite seu nome..."/>
            <label for='cpf'>CPF do comprador:</label>
            <input type='number' id='cpf' placeholder="Digite seu CPF..."/>
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