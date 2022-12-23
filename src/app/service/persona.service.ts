import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backend-lucho9595.koyeb.app/personas/';
  constructor(private http: HttpClient) { }

  //se utiliza el Observable para las busquedas asincronas
  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
