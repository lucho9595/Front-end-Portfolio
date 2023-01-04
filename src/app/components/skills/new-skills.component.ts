import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { ImageServiceProyects } from 'src/app/service/image-service-proyects.service';
import { SkillService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  img: string;

  constructor(private skillS: SkillService, private router: Router, public imageService: ImageServiceProyects) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const save = this.img = this.imageService.url
    console.log(save)
    const skill = new Skill(this.nombre, this.porcentaje, save);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
    console.log(this.skillS)
  }

  uploadImg($event: any) {
    this.imageService.uploadImage($event);
  }
}