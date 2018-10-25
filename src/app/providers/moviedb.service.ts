import { Injectable } from '@angular/core';
import { Jsonp }  from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

 private urlMovieDb:string ="https://api.themoviedb.org/3";
 private apiKey:string ="e451b7ecf42db57efb2a8afeefc0bd6e";
 private movies: any[]=[];


  constructor( private jsonp: Jsonp ) { }

  GetMostPopularMovies(){
    let url = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map( res => res.json()));
  }

  GetMostPopularMoviesKids(){
    let url = `${ this.urlMovieDb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }

  GetMoviesTheatres(){
    let dateStart = new Date;
    let dateFinal = new Date;
    dateFinal.setDate( dateFinal.getDate() + 7 );
    let startDate = `${ dateStart.getFullYear() }-${ dateStart.getMonth()+1 }-${ dateStart.getDate()}`;
    let finalDate = `${ dateFinal.getFullYear() }-${ dateFinal.getMonth()+1 }-${ dateFinal.getDate()}`;
    let url = `${ this.urlMovieDb }/discover/movie?primary_release_date.gte=${ startDate }&primary_release_date.lte=${ finalDate }&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map( res => res.json()));
  }

  SearcheMovies( movieName: string){
    let url = `${ this.urlMovieDb }/search/movie?query=${ movieName }&sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map( res => {
            this.movies = res.json().results;
            return  res.json().results;
    }));
  }

  GetMovie(id:string){
    let url = `${ this.urlMovieDb }/movie/${ id }?api_key=${ this.apiKey }&language=us&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map( res => res.json()));
  }
}
