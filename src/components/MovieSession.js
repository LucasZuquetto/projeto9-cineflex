import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import SubTitle from "./styledComponents/SubTitleStyle"

export default function MovieSession () {
    const {sessionId} = useParams()
    const [SessionSeats1, setSessionSeats1] = useState([])
    const [SessionSeats2, setSessionSeats2] = useState([])
    const [SessionSeats3, setSessionSeats3] = useState([])
    const [SessionSeats4, setSessionSeats4] = useState([])
    const [SessionSeats5, setSessionSeats5] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response => {console.log(response.data.seats)
        setSessionSeats1(response.data.seats.slice(0,10))
        setSessionSeats2(response.data.seats.slice(10,20))
        setSessionSeats3(response.data.seats.slice(20,30))
        setSessionSeats4(response.data.seats.slice(30,40))
        setSessionSeats5(response.data.seats.slice(40,50))
    }
    )},[])

    
    return (
        <>
            <Header />
            <SubTitle>Selecione o(s) assento(s)</SubTitle>
            <Seats>
                <div>{SessionSeats1.map((seat, index) =><Seat cor={seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{('00'+seat.name).slice(-2)}</Seat>)}</div>
                <div>{SessionSeats2.map((seat, index) =><Seat cor={seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats3.map((seat, index) =><Seat cor={seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats4.map((seat, index) =><Seat cor={seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats5.map((seat, index) =><Seat cor={seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <Examples>
                    <Example>
                        <Seat cor={'#1AAE9E'} borda={'#45BDB0'} ></Seat>
                        <h5>Selecionado</h5>
                    </Example>
                    <Example>
                        <Seat cor={'#C3CFD9'} borda={'#808F9D'}></Seat>
                        <h5>Disponível</h5>
                    </Example>
                    <Example>
                        <Seat cor={'#FBE192'} borda={'#F7C52B'}></Seat>
                        <h5>Indisponível</h5>
                    </Example>
                </Examples>
            </Seats>
        </>
    )
}

const Seats = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
        display: flex;
    }
`

const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.cor};
    border-radius: 50%;
    margin: 9px 5px;
    width: 6vw;
    height: 6vw;
    border: 1px solid ${props => props.borda};
    color: #000000;
    font-size: 11px;
`
const Examples = styled.div`
    width:100%;
    justify-content: space-evenly;

`
const Example = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4E5A65;
    font-size: 13px;
    flex-direction: column;
`