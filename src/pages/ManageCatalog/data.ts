import {RouteLoadFunc, cache, redirect} from '@solidjs/router';
import { Movie } from '../../models/movie';
import { ApiResponse } from '../../models/apiResponse';


export const getMoviesCatalogue = cache(async (token: string | null) => {
  if (!token) {
    throw redirect("/login")
  }
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${token}`)

  const requestOptions = {
    method: "GET",
    headers: headers
  }
  const moviesResponse = await fetch(`api/admin/movies`, requestOptions)
  const data = moviesResponse.json() as Promise<ApiResponse<[Movie]>>
  return (await data).data
}, 'getMovieCatalogue')
