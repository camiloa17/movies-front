import { Component } from "solid-js";
import { A } from "@solidjs/router";
import Ticket from "../../images/movie_tickets.jpg"


const Home :Component = ()=> {

  return (
    <div class="text-center">
       <h2>Find a movie to watch tonight!</h2>
        <hr />
        <A href="/movies" >
        <img src={Ticket} alt="movie tickets"></img>
        </A>
    </div>
  )
}

export default Home;