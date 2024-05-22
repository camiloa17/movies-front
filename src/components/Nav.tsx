import { A } from '@solidjs/router';
import { Component } from 'solid-js';

type Props = {
  iAuthenticated: boolean;
};

const Nav: Component<Props> = (props) => {
  return (
    <nav>
      <div class='list-group'>
        <A href='/' class='list-group-item list-group-item-action' end>
          Home
        </A>
        <A href='/movies' class='list-group-item list-group-item-action' end>
          Movies
        </A>
        <A href='/genres' class='list-group-item list-group-item-action' end>
          Genres
        </A>
        {props.iAuthenticated && (
          <>
            <A
              href='/admin/movie/0'
              class='list-group-item list-group-item-action'
              end
            >
              Add Movie
            </A>
            <A
              href='/manage-catalogue'
              class='list-group-item list-group-item-action'
              end
            >
              Manage Catalogue
            </A>
            <A
              href='/graphql'
              class='list-group-item list-group-item-action'
              end
            >
              GraphQL
            </A>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
