import AppRoutes from "./AppRoutes"
import { MovieProvider } from "./context/MovieProvider"

function App() {
  return (
    <MovieProvider>
      <AppRoutes />
    </MovieProvider>
  )
}

export default App
