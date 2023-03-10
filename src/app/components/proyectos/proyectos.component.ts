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
  proyects: Proyects[] = [];

  constructor(private proyectService: ProyectsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectService.lista().subscribe(
      data =>{
      this.proyects= data
      console.log(this.proyects)
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.proyectService.delete(id).subscribe(
          data => {
            this.cargarProyecto();
            alert("Proyecto Borrada")
          }, err => {
            alert("No se pudo borrar la Proyecto");
          }
        )
      } else {
        alert("No se borro la Proyecto");
      }
    }
  }

}
