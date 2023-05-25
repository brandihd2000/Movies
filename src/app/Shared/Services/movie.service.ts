import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'bf091621962bdf5c30339e874a2a0c1a';
  constructor(private http: HttpClient) { }

  getTop(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getDetail(id: number): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}${id}?api_key=${this.apiKey}&language=en-US`);
  }

}
