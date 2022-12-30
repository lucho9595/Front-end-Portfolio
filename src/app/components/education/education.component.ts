import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { TokenService } from 'src/app/service/token.service';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private educationS: EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducation(): void {
    this.educationS.lista().subscribe({
      next:data => {
        this.education = data
      }
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.educationS.delete(id).subscribe(
          data => {
            this.cargarEducation();
            alert("Educacion Borrada")
          }, err => {
            alert("No se pudo borrar la educacion");
          }
        )
      } else {
        alert("No se borro la educacion");
      }
    }
  }

}

