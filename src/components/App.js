import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieShowtimes from './MovieShowtimes'
import GlobalStyle from './styledComponents/GlobalStyles'
import MovieSession from './MovieSession'

export default function App () {
    
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/filme/:movieId' element={<MovieShowtimes />} />
                    <Route path='/sessao/:sessionId' element={<MovieSession />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}