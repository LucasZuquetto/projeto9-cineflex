import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ShowtimesDiv ({weekdays}) {
    return(
        <Content>
            {weekdays.map((weekday, index) => 
            <Showtimes key={index}>
                <div>
                    <span>{weekday.weekday} - {weekday.date}</span>
                </div>
                <div>
                    {weekday.showtimes.map((hour, index) => <Link key={index} to={`/sessao/${hour.id}`}><MovieHour >{hour.name}</MovieHour></Link>)}
                </div>
            </Showtimes> )}
        </Content>
        
    )
}
const Content = styled.div`
    margin-bottom: 117px;
`
const Showtimes = styled.div`
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
    

    &:hover{
        filter: contrast(70%);
    }
`