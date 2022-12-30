import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ImageServiceProyects } from 'src/app/service/image-service-proyects.service';
import { ProyectsService } from 'src/app/service/proyects-service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombre: string = '';
  description: string = '';
  img_proyect: string = '';


  constructor(private proyectService: ProyectsService,
    private router: Router,
    public imageService: ImageServiceProyects,) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const save = this.img_proyect = this.imageService.url
    const proyect = new Proyects(this.nombre, this.description, save);
    this.proyectService.save(proyect).subscribe({
      next: (_data) => {
        alert('Proyecto agregado');
        this.router.navigate(['']);
      },
      error: () => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    });
    console.log(proyect)
    console.log(save)
  }

  subirImagen($event: any) {
    const name = "Proyecto_";
    this.imageService.uploadImage($event, name);
  }
}
