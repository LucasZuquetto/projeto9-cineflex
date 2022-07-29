import { useEffect, useState } from "react"
import Header from "./Header"
import SubTitle from "./styledComponents/SubTitleStyle"

export default function MovieShowtimes () {
    const [Showtimes, setShowtimes] = useState([])

    useEffect(() => {
        const promise = axios.get('')
    })

    return(
        <>
            <Header />
            <SubTitle>Selecione o horário</SubTitle>
        </>
    )
}