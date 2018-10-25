import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { MoviedbService } from "../../providers/moviedb.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  movies: any;
  movieToSearch:string="";

  constructor( private movie: MoviedbService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => this.movieToSearch = params['movieFind']);
    if(this.movieToSearch !== ""){
      this.SearchMovie();
    }
  }

  SearchMovie(){
    this.movie.SearcheMovies(this.movieToSearch).subscribe( result => this.movies = result );
  }
}
