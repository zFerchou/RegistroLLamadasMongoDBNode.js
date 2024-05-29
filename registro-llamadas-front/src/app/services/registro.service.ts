import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private URL = 'http://localhost:3000/api/llamadas';

  constructor(private http: HttpClient) { }

  crearRegistroLlamada(registro: any): Observable<any> {
    return this.http.post<any>(this.URL, registro);
  }

  getRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  actualizarRegistroLlamada(numeroRegistro: number, registro: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/${numeroRegistro}`, registro);
  }

  eliminarRegistroLlamada(numeroRegistro: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${numeroRegistro}`);
  }
}