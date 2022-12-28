import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencie } from 'src/app/model/experiencie';
import { SExperiencieService } from 'src/app/service/s-experiencie.service';

@Component({
  selector: 'app-edit-experiencie',
  templateUrl: './edit-experiencie.component.html',
  styleUrls: ['./edit-experiencie.component.css']
})
export class EditExperiencieComponent implements OnInit {
  expLab: Experiencie = null;

  constructor(private sExperiencie: SExperiencieService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencie.detail(id).subscribe({
      next: data => {
        this.expLab = data;
      }, error: err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencie.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Experiencia Editada")
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
