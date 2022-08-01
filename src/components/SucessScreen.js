import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SubTitle from "./styledComponents/SubTitleStyle";


export default function SucessScreen(){

    return(
        <>
            <Header />
            <SubTitle><Sucess>Pedido feito com sucesso!</Sucess></SubTitle>
            <OrderInfo>
                <div>
                    <Bold>Filme e sessão</Bold>
                    <Info>filme e sessao</Info>
                </div>
                <div>
                    <Bold>Ingressos</Bold>
                    <Info>ingressos</Info>
                </div>
                <div>
                    <Bold>Comprador</Bold>
                    <Info>comprador</Info>
                </div>
                <Link to='/'><Button>Voltar pra Home</Button></Link>
            </OrderInfo>
        </>
    )
}
const Button = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #E8833A;
    margin-top: 60px;
    margin-right: 70px;
    margin-left: 40px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 5px;

     &:hover{
        filter: contrast(85%);
        cursor: pointer;
    }
    `

const OrderInfo = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    padding-left: 30px;
    box-sizing: border-box;
    
    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`
const Sucess = styled.div`
    color: #247A6B;
    font-weight: 700;
`
const Bold = styled.span`
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
`
const Info = styled.span`
    font-size: 22px;
    color: #293845;

`