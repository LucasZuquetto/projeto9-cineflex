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
    const [MovieTitle, setMovieTitle] = useState()
    const [posterUrl, setPosterUrl] = useState('')

    useEffect(() => {
       const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`)
       promise.then(response => {
        let Days = response.data.days
        setMovieTitle(response.data.title)
        setPosterUrl(response.data.posterURL)
        setShowtimeWeekdays([...Days])
    })
    },[])
    return(
        <>
            <Header />
            <SubTitle>Selecione o horário</SubTitle>
            <ShowtimesDiv weekdays={ShowtimeWeekdays} />
            <ShowtimesFooter MovieTitle={MovieTitle} posterUrl={posterUrl}/>
        </>
    )
}