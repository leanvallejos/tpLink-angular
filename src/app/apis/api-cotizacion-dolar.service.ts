import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCotizacionDolarService {

  private url: string = environment.apiCotizacionDolarURL;

  constructor(
    private http: HttpClient
  ) { }


  cotizacionDolar(){
    return this.http.get(this.url);
  }
}
