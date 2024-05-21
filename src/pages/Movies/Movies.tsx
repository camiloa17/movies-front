import { A, createAsync } from '@solidjs/router';
import { Component, For, Show } from 'solid-js';
import { getMovies } from './data';

const Movies: Component = (props) => {
  const movies = createAsync(() => getMovies());

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table class='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <Show when={movies()}>
            <For each={movies()}>
              {(movie, index) => (
                <tr>
                  <td>
                    <A href={`/movies/${movie.id}`}>{movie.title}</A>
                  </td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.MPAARating}</td>
                </tr>
              )}
            </For>
          </Show>
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
