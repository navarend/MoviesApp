import { Component, OnInit } from '@angular/core';
import { MoviedbService }  from "../../providers/moviedb.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  moviesTheatres: any;
  popularMovies: any;
  pouparMoviesKids: any;

  constructor( private movie:MoviedbService ) {
      this.movie.GetMoviesTheatres().subscribe( movies => this.moviesTheatres = movies );
      this.movie.GetMostPopularMovies().subscribe( popularMovies => this.popularMovies = popularMovies );
      this.movie.GetMostPopularMoviesKids().subscribe( moviesKids => this.pouparMoviesKids = moviesKids );
   }

  ngOnInit() {
  }

}
