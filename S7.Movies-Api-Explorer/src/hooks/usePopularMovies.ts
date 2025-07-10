import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/getMovies';
import type { MovieListResponse } from '../types/moviesTypes'; 

export const usePopularMovies = (page: number) => {
  return useQuery<MovieListResponse>({
    queryKey:['popularMovies', page], 
    queryFn:() => getPopularMovies(page),
})
}