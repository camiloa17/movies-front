import {RouteLoadFunc, cache} from '@solidjs/router';

export const getMovies = cache(async () => {
  return (await fetch(`http://localhost:8080/movies/`)).json()
}, 'getMovie')

export const loadMovies: RouteLoadFunc = () => {
  getMovies()
}