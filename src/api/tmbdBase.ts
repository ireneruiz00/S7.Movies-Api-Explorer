import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMBD_API_KEY,
    language: "en-EN",
  },
})

export default api
