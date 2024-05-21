import {RouteLoadFunc, cache} from '@solidjs/router';
import { Movie } from '../../models/movie';

export const getMovie = cache(async (id: string) => {
  return (await fetch(`http://localhost:8080/movies/${id}`)).json() as Promise<Movie>
}, 'getMovie')

export const loadMovie: RouteLoadFunc = ({params}) => {
  getMovie(params.id)
}