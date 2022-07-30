import { useEffect, useState } from "react"
import Header from "./Header"
import SubTitle from "./styledComponents/SubTitleStyle"
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function MovieShowtimes () {
    const {movieId} = useParams()

    const [Showtimes, setShowtimes] = useState([])

    useEffect(() => {
       const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId+1}/showtimes`)
       promise.then(response => {
        console.log(response.data.days)
    })
    })

    return(
        <>
            <Header />
            <SubTitle>Selecione o horário</SubTitle>
            <DayShowtimes>
                <div>
                    <span>Segunda - 24/06/2022</span>
                </div>
                <div>
                    <MovieHour>15:00</MovieHour>
                    <MovieHour>15:00</MovieHour>
                    <MovieHour>15:00</MovieHour>
                </div>
            </DayShowtimes>
            <DayShowtimes>
                <div>
                    <span>Segunda - 24/06/2022</span>
                </div>
                <div>
                    <MovieHour>15:00</MovieHour>
                    <MovieHour>15:00</MovieHour>
                    <MovieHour>15:00</MovieHour>
                </div>
            </DayShowtimes>
            {/* criar um componente para o DayShowtime e deixar dinamico o componente */}
        </>
    )
}

const DayShowtimes = styled.div`
    display: flex;
    flex-direction: column;
    color: #293845;
    font-size: 20px;
    margin-left: 23px;

    div{
        display: flex;
        margin-bottom: 23px;
    }
`
const MovieHour = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E8833A;
    width: 82px;
    height: 43px;
    border-radius: 3px;
    color: #FFFFFF;
    margin-right: 8px;
`