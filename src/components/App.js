import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieShowtimes from './MovieShowtimes'
import GlobalStyle from './styledComponents/GlobalStyles'

export default function App () {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/filme' element={<MovieShowtimes />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}