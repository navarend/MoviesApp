import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage'
})
export class FormatImagePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): any {
    let pathImage:string = "http://image.tmdb.org/t/p/w300";// `http://image.tmdb.org/t/p/w200${movie}`;
    if(poster){
      pathImage = pathImage + movie.poster_path;
      return pathImage;
    }

    if(movie.backdrop_path){
       pathImage = pathImage + movie.backdrop_path;
    }else{
      if(movie.poster_path){
        pathImage = pathImage + movie.poster_path;
      }else{
        pathImage = "assets/img/no-image.png";
      }
    }
    return pathImage;
  }
}
