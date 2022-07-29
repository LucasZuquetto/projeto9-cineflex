import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from 'axios'


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
            <SubTitle>Selecione o Filme</SubTitle>
            <Content>
                {moviesImage.map((movieSource, index) => <img key={index} src={movieSource} alt='banner' />)}
            </Content>
        </>
    )
}
const SubTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #293845;
    width: 100vw;
    height: 110px;
    font-size: 24px;
`
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