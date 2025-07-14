import { createContext, useContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/getMovies';
import type { MovieContextProps } from '../types/moviesTypes';

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery ({
    queryKey: ['discoverMovies'],
    queryFn: ({ pageParam = 1 }) => getPopularMovies({pageParam}),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
    initialPageParam: 1
  });
  const movies = data?.pages
    .flatMap(page => page.results) ?? [];

  const uniqueMovies = Array.from(new Map(movies.map(m => [m.id, m])).values());

  return (
    <MovieContext.Provider value={{ movies: uniqueMovies, fetchNextPage, hasNextPage, isFetching }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used within a MovieProvider");
  return context;
};