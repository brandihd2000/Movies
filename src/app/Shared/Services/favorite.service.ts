import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private subject = new ReplaySubject<any>();
  peliculas: any[] = new Array<any>();

  sendPelicula(pelicula: any) {
    this.peliculas.push(pelicula)
    this.subject.next(this.peliculas);
  }


  getPelicula(): Observable<any> {
    return this.subject.asObservable();
  }
}
