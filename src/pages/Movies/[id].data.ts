import {RouteLoadFunc, cache} from '@solidjs/router';

export const getMovie = cache(async (id: string) => {
  return (await fetch(`http://localhost:8080/movies/${id}`)).json()
}, 'getMovie')

export const loadMovie: RouteLoadFunc = ({params}) => {
  getMovie(params.id)
}