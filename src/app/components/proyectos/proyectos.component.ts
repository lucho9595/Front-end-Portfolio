import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyect: Proyects[] = [];

  constructor(public proyectService: ProyectsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyect()
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyect(){
    this.proyectService.lista().subscribe(data =>{
      this.proyect= data
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.proyectService.delete(id).subscribe(
          data => {
            this.cargarProyect();
            alert("Experiencia Borrada")
          }, err => {
            alert("No se pudo borrar la experiencia");
          }
        )
      } else {
        alert("No se borro la experiencia");
      }
    }
  }

}
