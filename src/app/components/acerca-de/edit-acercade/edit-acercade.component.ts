import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  persona: persona = null;
  imageSrc: string;
  userFile: any;
  imageSelected: any;

  constructor(private activateRouter: ActivatedRoute, private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Persona Editada")
      }, err => {
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){

  }

    readURL($event: any) {
      this.userFile = $event.target.files[0];
      this.imageSelected = this.userFile.name;
      if ($event.target.files && $event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL($event.target.files[0]);
      }}
}


