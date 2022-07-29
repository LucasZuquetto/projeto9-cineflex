import styled from "styled-components"

export default function Header() {
    return(
        <Title>
            <h1>CINEFLEX</h1>
        </Title>
    )
}

const Title = styled.div `
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
width: 100vw;
height: 67px;
color: #E8833A;
font-size: 34px;
`
