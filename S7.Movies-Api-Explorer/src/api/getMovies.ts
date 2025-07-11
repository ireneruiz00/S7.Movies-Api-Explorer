import api from './tmbdBase';
import type { MovieListResponse } from '../types/moviesTypes'; 

export const getPopularMovies = async ({ pageParam = 1 }): Promise<MovieListResponse> => {
  const res = await api.get<MovieListResponse>('/movie/popular', {
    params: { page: pageParam }
  });
  return res.data;
}

