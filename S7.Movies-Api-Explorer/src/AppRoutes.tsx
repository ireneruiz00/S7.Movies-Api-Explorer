import { Routes, Route } from "react-router-dom"
import MoviesGrid from "./components/moviesPage/MoviesGrid"
import MovieDetailsPage from "./components/movieDetailsPage/MovieDetailsPage"
import HomePage from "./components/home/HomePage"
import LoginPage from "./components/loginPage/LoginPage"
import Layout from "./layouts/Layout"

function AppRoutes() {
  return (
    <Routes>
        <Route path='/services' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<Layout/>}>
            <Route path='/movies' element={<MoviesGrid/>}/>
            <Route path='/details' element={<MovieDetailsPage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes