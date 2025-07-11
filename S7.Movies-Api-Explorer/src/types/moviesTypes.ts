export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieContextProps {
  movies: Movie[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
}