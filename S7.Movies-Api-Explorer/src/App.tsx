import AppRoutes from './AppRoutes'
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <MovieProvider>
      <AppRoutes/>
    </MovieProvider>
  )
}

export default App
