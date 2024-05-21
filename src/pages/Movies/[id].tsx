import { createAsync, RouteSectionProps } from "@solidjs/router";
import { Component, Show } from "solid-js";
import { getMovie } from "./[id].data";


const Movie :Component<RouteSectionProps> = (props)=> {
  const movie = createAsync(() => getMovie(props.params.id));
  return (
    <Show when={movie()} >
      <div>
            <h2>Movie: {movie()?.title}</h2>
            <small><em>{movie()?.releaseDate}, {movie()?.runTime} minutes, Rated {movie()?.MPAARating}</em></small>
            <hr />
            <p>{movie()?.description}</p>
        </div>
    </Show>
  )
}

export default Movie;