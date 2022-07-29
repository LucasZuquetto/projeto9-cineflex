import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from 'axios'
import Header from "./Header"
import { Link } from "react-router-dom"
import SubTitle from "./styledComponents/SubTitleStyle"


export default function Home () {
const [moviesImage, setMoviesImage] = useState([])

useEffect(() => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
    
    promise.then(response => {
        const ArrPosterUrl = response.data.map((item) => item.posterURL)
        setMoviesImage(ArrPosterUrl)
    }
    )}, [])

    return(
        <>
            <Header />
            <SubTitle>Selecione o Filme</SubTitle>
            <Content>
                {moviesImage.map((movieSource, index) => <Link key={index} to='/filme' ><img src={movieSource} alt='banner' /></Link>)}
            </Content>
        </>
    )
}
const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;

    img{
        width: 129px;
        height: 193px;
        margin-bottom: 27px;
    }
`