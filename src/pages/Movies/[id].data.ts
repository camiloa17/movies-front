import { cache} from '@solidjs/router';
import { Movie } from '../../models/movie';
import { ApiResponse } from '../../models/apiResponse';

export const getMovie = cache(async (id: string) => {
  const moviesResponse = await fetch(`http://localhost:3000/api/movies/${id}`)
  const data = moviesResponse.json() as Promise<ApiResponse<Movie>>
  return (await data).data
}, 'getMovie')
