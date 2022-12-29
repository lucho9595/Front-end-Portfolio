import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})

export class ProyectsService {

    URL = environment.URL + 'proyects/';
    constructor(private httpClient: HttpClient) { }
  
    //se utiliza el Observable para las busquedas asincronas
  //traemos a toda la lista de experiencia
  public lista(): Observable<Proyects[]> {
    return this.httpClient.get<Proyects[]>(this.URL + 'lista');
  }
  
  //buscamos la experiencia por el id
  public detail(id: number): Observable<Proyects>{
    return this.httpClient.get<Proyects>(this.URL + `detail/${id}`)
  }
  
  
  //aca actualizamos los datos
  public update(proyects: Proyects, id: number): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyects)
  }
  
  //creamos una nuevo experiencia
  public save(proyects: Proyects): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, proyects);
  }
  
  
  //aca borramos la experiencia
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}
