import { createAsync } from "@solidjs/router";
import { Component, For } from "solid-js";
import { getMovies } from "./data";


const Movies :Component = (props)=> {
  const movies = createAsync(()=> getMovies())
  console.log(movies())
  return (
    <For each={movies()}>
      {(item, index) =>(
      <div>
        {item.id}
        {item.title}

      </div>)
     }
    </For>

  )
}

export default Movies;