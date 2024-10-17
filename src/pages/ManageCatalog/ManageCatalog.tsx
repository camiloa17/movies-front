import { Component, createEffect, For, Show } from 'solid-js';
import { getMoviesCatalogue } from './data';
import { A, createAsync, useNavigate } from '@solidjs/router';
import { useAppContext } from '../../context/appContext';

const ManageCatalog: Component = () => {
  const {jwt} = useAppContext()
  
  const movies = createAsync(() => getMoviesCatalogue(jwt() as string));
  return (
    <div>
      <h2>Movies Catalogue</h2>
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

export default ManageCatalog;
