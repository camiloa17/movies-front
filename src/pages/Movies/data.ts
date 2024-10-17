import {RouteLoadFunc, cache} from '@solidjs/router';
import { Movie } from '../../models/movie';
import { ApiResponse } from '../../models/apiResponse';


export const getMovies = cache(async () => {
  const moviesResponse = await fetch(`api/movies/`)
  if (!moviesResponse.ok){

  }
  const data = moviesResponse.json() as Promise<ApiResponse<[Movie]>>
  return (await data).data
}, 'getMovies')

export const loadMovies: RouteLoadFunc = async () => {
  const movies = await getMovies()
  
  return movies;
}