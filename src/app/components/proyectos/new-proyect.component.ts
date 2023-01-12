import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ImageServiceProyects } from 'src/app/service/image-service-proyects.service';
import { ProyectsService } from 'src/app/service/proyects-service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombre: string;
  description: string;
  img: string;
  url_imagen: string;


  constructor(
    private proyectService: ProyectsService,
    private router: Router,
    public imageService: ImageServiceProyects,) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const save = this.img = this.imageService.url
    console.log(save)
    const proyects = new Proyects(this.nombre, this.description, save, this.url_imagen);
    this.proyectService.save(proyects).subscribe({
      next: (_data) => {
        alert('Proyecto agregado');
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Fallo');
        this.router.navigate(['/home']);
      }
    });
  }

  uploadImage($event: any) {
    this.imageService.uploadImage($event);
  }
}
