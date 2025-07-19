import { useQuery } from '@tanstack/react-query';
import { getMovieDetails, getMovieCredits } from '../api/getEndpoints';
import type { MovieCredits } from '../types/creditsTypes';
// import type { MovieListResponse } from '../types/moviesTypes'; 

// export const usePopularMovies = (page: number) => {
//   return useQuery<MovieListResponse>({
//     queryKey:['popularMovies', page], 
//     queryFn:() => getPopularMovies(page),
// })
// }


export const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id
  });
};

export const useMovieCredits = (id: string) => {
  return useQuery<MovieCredits>({
    queryKey: ['credits', id],
    queryFn: () => getMovieCredits(id),
    enabled: !!id
  });
};