import {RouteLoadFunc, cache} from '@solidjs/router';
import { Movie } from '../../models/movie';
import { ApiResponse } from '../../models/apiResponse';

export const getMovie = cache(async (id: string) => {
  const moviesResponse = await fetch(`http://localhost:8080/movies/${id}`)
  const data = moviesResponse.json() as Promise<ApiResponse<Movie>>
  return (await data).data
}, 'getMovie')

export const loadMovie: RouteLoadFunc = ({params}) => {
  getMovie(params.id)
}