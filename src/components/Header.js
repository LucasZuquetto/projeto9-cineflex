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
background-color: #C3CFD9;
width: 100vw;
height: 67px;
color: #E8833A;
font-size: 34px;
position: fixed;
top: 0;
left: 0;
`
