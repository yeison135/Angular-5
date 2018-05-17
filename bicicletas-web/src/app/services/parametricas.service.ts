import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Respuesta } from '../objects/respuesta' 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ParametricasService {
  private urlApi = 'http://localhost:8080/bicicletas/parametricas/constante';
  constructor(private http: HttpClient) { }

  getTiposTraslado(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.urlApi)
      .pipe(
        catchError(this.handleError('getHeroes', null))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // Se lanza el error al log
    console.error(error);
 
    // Se lanza el error al usuario.
    //this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
