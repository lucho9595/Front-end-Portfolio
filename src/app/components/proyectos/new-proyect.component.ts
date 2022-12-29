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
  nombre: string = '';
  description: string = '';
  img_proyect: string = '';


  constructor(private proyectService: ProyectsService,
    private router: Router,
    public imageService: ImageServiceProyects,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyect = new Proyects(this.nombre, this.description, this.img_proyect);
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
  }

  uploadImage($event: any) {
    const id = this.activateRouter.snapshot.params['id'];
    const name = "Proyecto_" + id;
    this.imageService.uploadImage($event, name);
  }
}
