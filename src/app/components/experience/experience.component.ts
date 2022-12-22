import { Component, OnInit } from '@angular/core';
import { Experiencie } from 'src/app/model/experiencie';
import { SExperiencieService } from 'src/app/service/s-experiencie.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: Experiencie[] = [];

  constructor(private sExperiencie: SExperiencieService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencie();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencie(): void {
    this.sExperiencie.lista().subscribe(
      data => {
        this.exp = data
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.sExperiencie.delete(id).subscribe(
          data => {
            this.cargarExperiencie();
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

