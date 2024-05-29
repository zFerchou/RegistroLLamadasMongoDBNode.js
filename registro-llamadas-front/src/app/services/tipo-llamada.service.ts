import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoLlamadaService {

  private URL = 'http://localhost:3000/api/tipo';

  constructor(private http: HttpClient) { }

  getTiposLlamada(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/`);
  }

}