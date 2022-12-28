import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
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

  constructor(private activateRouter: ActivatedRoute, 
    private personaService: PersonaService, 
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next: data => {
        this.persona = data;
      },
      error: err => {
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
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
    const id = this.activateRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
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


