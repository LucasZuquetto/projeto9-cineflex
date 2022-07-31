import { useEffect, useState } from "react"
import Header from "./Header"
import SubTitle from "./styledComponents/SubTitleStyle"
import axios from "axios"
import { useParams } from "react-router-dom"
import ShowtimesDiv from "./ShowtimesDiv"
import ShowtimesFooter from "./ShowtimesFooter"

export default function MovieShowtimes () {
    let {movieId} = useParams()
    movieId = Number(movieId) + 1

    const [ShowtimeWeekdays, setShowtimeWeekdays] = useState([])

    useEffect(() => {
       const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`)
       promise.then(response => {
        let Days = response.data.days
        setShowtimeWeekdays([...Days])
    })
    },[])
    return(
        <>
            <Header />
            <SubTitle>Selecione o horário</SubTitle>
            <ShowtimesDiv weekdays={ShowtimeWeekdays} />
            <ShowtimesFooter  />
        </>
    )
}