import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from "@angular/router";
import { MoviedbService }  from "../../providers/moviedb.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  idMovie:string="";
  movieDetails:any;
  page:string="";
  search:string="";

  constructor( private movieDb:MoviedbService, private route:Router, private activatedRoute: ActivatedRoute ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.idMovie = params['id'];
      this.page = params['page'];
      this.search = params['search'];
      console.log(this.search);
     });
    this.movieDb.GetMovie(this.idMovie).subscribe( result => {
      this.movieDetails = result;
      console.log(this.movieDetails);
    })
  }

}
