import { Component, OnInit, signal } from '@angular/core';
import { MovieServiceService } from 'src/app/Shared/Services/movie.service';
import { lastValueFrom } from 'rxjs';
import { FavoriteService } from 'src/app/Shared/Services/favorite.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public peliculas:any = [];
  public FavoriteMovie: any = [];
  public name: string = '';
  constructor(public _movieServiceService: MovieServiceService, public _favoriteService: FavoriteService) {

    this.getAllMovieTop();
  }

  ngOnInit() {
    this._favoriteService.getPelicula().subscribe((res) => {
      this.FavoriteMovie = res;
    })
  }


  public async getAllMovieTop() {
    const result = await lastValueFrom(this._movieServiceService.getTop());
    this.peliculas = result.results;
  }

  public searchMovie() {
    if (this.name === '') {
      this.getAllMovieTop();
    } else {
      const filteredPeople = this.peliculas.filter((x: any) => x.original_title.includes(this.name));
      if (filteredPeople.length > 0)
        this.peliculas = filteredPeople;
    }
  }
}
