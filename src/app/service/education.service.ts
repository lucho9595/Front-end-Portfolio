import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
    educationURL = 'http://backend-lucho9595.koyeb.app/education/'

  constructor(private htppClient: HttpClient) { }

  //traemos a toda la lista de experiencia
  public lista(): Observable<Education[]> {
    return this.htppClient.get<Education[]>(this.educationURL + 'lista');
  }

  //buscamos la experiencia por el id
  public detail(id: number): Observable<Education>{
    return this.htppClient.get<Education>(this.educationURL + `detail/${id}`)
  }

  //creamos una nuevo experiencia
  public save(education: Education): Observable<any>{
    return this.htppClient.post<any>(this.educationURL + `create`, education);
  }

  //aca actualizamos los datos
  public update(id: number, education: Education): Observable<any>{
    return this.htppClient.put<any>(this.educationURL + `update/${id}`, education)
  }

  //aca borramos la experiencia
  public delete(id: number): Observable<any>{
    return this.htppClient.delete<any>(this.educationURL + `delete/${id}`)
  }
}
