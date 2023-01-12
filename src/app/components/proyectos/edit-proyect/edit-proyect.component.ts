import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ImageServiceProyects } from 'src/app/service/image-service-proyects.service';
import { ProyectsService } from 'src/app/service/proyects-service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyects: Proyects = null;

  constructor(private activateRouter: ActivatedRoute, 
    private proyectService: ProyectsService, 
    private router: Router,
    public imageService: ImageServiceProyects) { }

    ngOnInit(): void {
      const id = this.activateRouter.snapshot.params['id'];
      this.proyectService.detail(id).subscribe(
        data => {
          this.proyects = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['/home']);
        }
      )
    }

    onUpdate(): void {
      const id = this.activateRouter.snapshot.params['id'];
      this.proyects.img = this.imageService.url
      this.proyectService.update(this.proyects, id).subscribe(
        data => {
          this.router.navigate(['/home']);
          alert("Proyecto Editado")
        }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['/home']);
        }
      )
    }
  
    uploadImage($event: any){
      this.imageService.uploadImage($event);
    }

}
