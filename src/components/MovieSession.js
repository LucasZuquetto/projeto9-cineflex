import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Form from "./Form"
import Header from "./Header"
import ShowtimesFooter from "./ShowtimesFooter"
import SubTitle from "./styledComponents/SubTitleStyle"

export default function MovieSession () {
    const {sessionId} = useParams()
    const [SessionSeats1, setSessionSeats1] = useState([])
    const [SessionSeats2, setSessionSeats2] = useState([])
    const [SessionSeats3, setSessionSeats3] = useState([])
    const [SessionSeats4, setSessionSeats4] = useState([])
    const [SessionSeats5, setSessionSeats5] = useState([])
    const [selected, setSelected] = useState(false)
    const [idsSelected, setIdsSelected] = useState([])
    const [MovieTitle, setMovieTitle] = useState()
    const [posterUrl, setPosterUrl] = useState('')
    const [MovieDay, setMovieDay] = useState()
    const [MovieDate, setMovieDate] = useState()
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response => {
        setPosterUrl(response.data.movie.posterURL)
        setMovieTitle(response.data.movie.title)
        setMovieDay(response.data.day.weekday)
        setMovieDate(response.data.day.date)
        setSessionSeats1(response.data.seats.slice(0,10))
        setSessionSeats2(response.data.seats.slice(10,20))
        setSessionSeats3(response.data.seats.slice(20,30))
        setSessionSeats4(response.data.seats.slice(30,40))
        setSessionSeats5(response.data.seats.slice(40,50))
    }
    )},[])

    
    function selection(seat){
        for(let i=0;i<SessionSeats1.length;i++){
            const item = SessionSeats1[i]
            if(item.id == seat && item.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        }
        for(let i=0;i<SessionSeats2.length;i++){
            const item = SessionSeats2[i]
            if(item.id == seat && item.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        }
        for(let i=0;i<SessionSeats3.length;i++){
            const item = SessionSeats3[i]
            if(item.id == seat && item.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        }
        for(let i=0;i<SessionSeats4.length;i++){
            const item = SessionSeats4[i]
            if(item.id == seat && item.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        }
        for(let i=0;i<SessionSeats5.length;i++){
            const item = SessionSeats5[i]
            if(item.id == seat && item.isAvailable === false){
                alert('Esse assento não está disponível')
                return
            }
        } 
        if(idsSelected.includes(seat)){
            let index = idsSelected.indexOf(seat)
            idsSelected.splice(index, 1)
            setIdsSelected([...idsSelected])
            return
        }
        setIdsSelected([...idsSelected, seat])
        setSelected(!selected)
    }
    return (
        <>
            <Header />
            <SubTitle>Selecione o(s) assento(s)</SubTitle>
            <Seats>
                <div>{SessionSeats1.map((seat, index) => <Seat id={seat.id} onClick={seat => selection(seat.target.id )} cor={idsSelected.includes(`${seat.id}`) ? '#1AAE9E' : seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={idsSelected.includes(`${seat.id}`) ? '#45BDB0' : seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{('00'+seat.name).slice(-2)}</Seat>)}</div>
                <div>{SessionSeats2.map((seat, index) =><Seat id={seat.id} onClick={(seat) => selection(seat.target.id)} cor={idsSelected.includes(`${seat.id}`) ? '#1AAE9E' : seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={idsSelected.includes(`${seat.id}`) ? '#45BDB0' : seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats3.map((seat, index) =><Seat id={seat.id} onClick={(seat) => selection(seat.target.id)} cor={idsSelected.includes(`${seat.id}`) ? '#1AAE9E' : seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={idsSelected.includes(`${seat.id}`) ? '#45BDB0' : seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats4.map((seat, index) =><Seat id={seat.id} onClick={(seat) => selection(seat.target.id)} cor={idsSelected.includes(`${seat.id}`) ? '#1AAE9E' : seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={idsSelected.includes(`${seat.id}`) ? '#45BDB0' : seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
                <div>{SessionSeats5.map((seat, index) =><Seat id={seat.id} onClick={(seat) => selection(seat.target.id)} cor={idsSelected.includes(`${seat.id}`) ? '#1AAE9E' : seat.isAvailable ? '#C3CFD9' : '#FBE192'} borda={idsSelected.includes(`${seat.id}`) ? '#45BDB0' : seat.isAvailable ?'#808F9D' : '#F7C52B'} key={index}>{seat.name}</Seat>)}</div>
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
            <Form ids={idsSelected} />
            <ShowtimesFooter MovieDate={MovieDate} MovieDay={MovieDay} posterUrl={posterUrl} MovieTitle={MovieTitle} />
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