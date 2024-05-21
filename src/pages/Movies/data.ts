import {RouteLoadFunc, cache} from '@solidjs/router';
import { Movie } from '../../models/movie';

export const getMovies = cache(async () => {
  return (await fetch(`http://localhost:8080/movies/`)).json() as Promise<[Movie]>
}, 'getMovie')

export const loadMovies: RouteLoadFunc = () => {
  getMovies()
}