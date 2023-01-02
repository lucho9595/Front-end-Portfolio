import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string = '';
  porcentaje: number;
  img: string = '';

  constructor(private skillS: SkillService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
   
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.img);
    console.log(skill)
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
    console.log(this.skillS)
  }

  subirImagen($event: any) {
    const name = "Proyecto_";
    this.imageService.uploadImage($event, name);
}
}