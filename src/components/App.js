import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movie from './Movie'
import GlobalStyle from './GlobalStyles'

export default function App () {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme' element={<Movie />} />
            </Routes>
            </BrowserRouter>
        </>
        
    )
}