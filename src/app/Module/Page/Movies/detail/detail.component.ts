import { Component, OnInit, signal } from '@angular/core';
import { MovieServiceService } from 'src/app/Shared/Services/movie.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriteService } from 'src/app/Shared/Services/favorite.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements  OnInit {
  public pelicula = signal<any>({});
  public id = 0;
  constructor(public _movieServiceService: MovieServiceService, private route: ActivatedRoute, public _favoriteService: FavoriteService, private router: Router ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getAllMovieTop();
  }


  public async getAllMovieTop() {
    const result = await lastValueFrom(this._movieServiceService.getDetail(this.id));
    this.pelicula.set(result);
  }

  public addFavorite(pelicula: any) {
    this._favoriteService.sendPelicula(pelicula);
    this.router.navigate(['/']);
  }
}
