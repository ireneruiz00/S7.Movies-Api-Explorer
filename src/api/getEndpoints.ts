import api from './tmbdBase';
import type { MovieListResponse, Movie } from '../types/moviesTypes'; 
import type { MovieCredits } from '../types/creditsTypes';

export const getPopularMovies = async ({ pageParam = 1 }): Promise<MovieListResponse> => {
  const res = await api.get<MovieListResponse>('/movie/popular', {
    params: { page: pageParam }
  })
  return res.data;
}

export const getMovieDetails = (id: string): Promise<Movie> => {
  return api.get(`/movie/${id}`).then(res => res.data)
}

export const getMovieCredits = (id: string): Promise<MovieCredits> => {
  return api.get(`/movie/${id}/credits`).then(res => res.data)
}

export const getActorsDetails = (id: string) => {
  return api.get(`/person/${id}`).then(res => res.data)
}

