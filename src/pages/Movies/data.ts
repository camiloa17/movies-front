import {RouteLoadFunc, cache} from '@solidjs/router';
import { Movie } from '../../models/movie';
import { ApiResponse } from '../../models/apiResponse';


export const getMovies = cache(async () => {
  const moviesResponse = await fetch(`api/movies/`)
  const data = moviesResponse.json() as Promise<ApiResponse<[Movie]>>
  return (await data).data
}, 'getMovie')

export const loadMovies: RouteLoadFunc = () => {
  getMovies()
}