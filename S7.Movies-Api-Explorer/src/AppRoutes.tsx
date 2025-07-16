import { Routes, Route } from "react-router-dom"
import MoviesGrid from "./components/moviesPage/MoviesGrid"
import MovieDetailsPage from "./components/movieDetailsPage/MovieDetailsPage"
import HomePage from "./components/home/HomePage"
import LoginPage from "./components/authentication/LoginPage"
import Layout from "./layouts/Layout"
import RegisterPage from "./components/authentication/RegisterPage"
import ProtectedRoute from "./ProtectedRoutes"
import ActorsDetails from "./components/actorsDetailsPage/ActorsDetails"

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<RegisterPage/>}/>
        <Route element={<Layout/>}>
            <Route path='/movies' element={<MoviesGrid/>}/>
            <Route path='/movies/:id' element={<ProtectedRoute><MovieDetailsPage/></ProtectedRoute>}/>
            <Route path='/actor/:id'element={<ActorsDetails/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes