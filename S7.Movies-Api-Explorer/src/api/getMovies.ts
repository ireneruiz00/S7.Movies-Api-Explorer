import api from './tmbdBase';
import type { MovieListResponse } from '../types/moviesTypes'; 

export const getPopularMovies = (page: number): Promise<MovieListResponse> => {
  return api.get<MovieListResponse>('/movie/popular', { params: { page } })
            .then(res => res.data);
}