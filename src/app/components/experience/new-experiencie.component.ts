import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencie } from 'src/app/model/experiencie';
import { SExperiencieService } from 'src/app/service/s-experiencie.service';

@Component({
  selector: 'app-new-experiencie',
  templateUrl: './new-experiencie.component.html',
  styleUrls: ['./new-experiencie.component.css']
})
export class NewExperiencieComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencie: SExperiencieService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencie(this.nombreE, this.descripcionE);
    this.sExperiencie.save(expe).subscribe({
      next: (data) => {
        alert('Experiencia agregada');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Fallo');
        this.router.navigate(['/home']);
      }
    });
  }

}
