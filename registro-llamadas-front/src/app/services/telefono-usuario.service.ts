import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonoUsuarioService {
  private URL = 'http://localhost:3000/api/telefonos';

  constructor(private http: HttpClient) { }

  getTelefonosUsuario(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}`);
  }

  getTelefonosByUsuario(claveU: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}?claveU=${claveU}`);
  }
}
