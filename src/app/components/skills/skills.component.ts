import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.skillS.delete(id).subscribe(
          data => {
            this.cargarSkills();
            alert("Skill Borrada")
          }, err => {
            alert("No se pudo borrar la Skill");
          }
        )
      } else {
        alert("No se borro la Skill");
      }
    }
  }
}