import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  tituloE: string = '';
  inicioE: Date ;
  finE: Date;

  constructor(private sEducation: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Education(this.nombreE, this.descripcionE, this.tituloE, this.inicioE, this.finE);
    this.sEducation.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['/home']);
      }, err =>{
        alert("falló");
        this.router.navigate(['/home']);
      }
    )
  }

}
