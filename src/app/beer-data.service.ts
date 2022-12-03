import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/beer';

const URL='https://638a745f4eccb986e8ad1b1f.mockapi.io/ipaCerveceria/beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]>{
    return this.http.get<Beer[]>(URL)
      .pipe(
        tap((beers:Beer[]) => beers.forEach(beer=>beer.quantity=0))
      );
  }


}
