import { Component } from '@angular/core';
import { MoviedbService } from "./providers/moviedb.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private movies:MoviedbService){
    //this.movies.GetMostPopularMovies().subscribe( movieData => console.log(movieData))
  //  this.movies.GetMostPopularMoviesKids().subscribe( kidsMovies => console.log(kidsMovies))
  }
}
