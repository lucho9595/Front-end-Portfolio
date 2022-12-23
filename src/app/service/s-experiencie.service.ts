import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencie } from '../model/experiencie';

@Injectable({
  providedIn: 'root'
})
export class SExperiencieService {
  expURL = 'http://backend-lucho9595.koyeb.app/explab/'

  constructor(private htppClient: HttpClient) { }

  //traemos a toda la lista de experiencia
  public lista(): Observable<Experiencie[]> {
    return this.htppClient.get<Experiencie[]>(this.expURL + 'lista');
  }

  //buscamos la experiencia por el id
  public detail(id: number): Observable<Experiencie>{
    return this.htppClient.get<Experiencie>(this.expURL + `detail/${id}`)
  }

  //creamos una nuevo experiencia
  public save(experiencie: Experiencie): Observable<any>{
    return this.htppClient.post<any>(this.expURL + `create`, experiencie);
  }

  //aca actualizamos los datos
  public update(id: number, experiencie: Experiencie): Observable<any>{
    return this.htppClient.put<any>(this.expURL + `update/${id}`, experiencie)
  }

  //aca borramos la experiencia
  public delete(id: number): Observable<any>{
    return this.htppClient.delete<any>(this.expURL + `delete/${id}`)
  }
}
