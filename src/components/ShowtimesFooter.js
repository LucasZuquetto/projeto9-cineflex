import styled from "styled-components"

export default function ShowtimesFooter ({MovieTitle, posterUrl, MovieDay, MovieDate}) {
    return(
        <Footer>
            <img src={posterUrl} alt="Movie banner" />
            <div>
                <h4>{MovieTitle}</h4>
                <h4>{MovieDay} - {MovieDate}</h4>
            </div>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #9EADBA;
    width: 100vw;
    height: 117px;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid #9EADBA;;

    img{
        width: 48px;
        height: 72px;
    }
    h4{
        color: #293845;
        font-size: 26px;
    }
`