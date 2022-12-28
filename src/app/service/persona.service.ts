import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/';
  constructor(private http: HttpClient) { }

  //se utiliza el Observable para las busquedas asincronas
//traemos a toda la lista de experiencia
public lista(): Observable<persona[]> {
  return this.http.get<persona[]>(this.URL + 'lista');
}

//buscamos la experiencia por el id
public detail(id: number): Observable<persona>{
  return this.http.get<persona>(this.URL + `detail/${id}`)
}


//aca actualizamos los datos
public update(id: number, Persona: persona): Observable<any>{
  return this.http.put<any>(this.URL + `update/${id}`, Persona)
}

/*//creamos una nuevo experiencia
public save(education: Education): Observable<any>{
  return this.http.post<any>(this.URL + `create`, education);
}


//aca borramos la experiencia
public delete(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + `delete/${id}`)
}*/

}
