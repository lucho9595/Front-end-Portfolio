import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private contact: ContactServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(form: any) {
    console.log(form)
    this.contact.PostMessage(form)
      .subscribe(response => {
        location.href = ' https://mailthis.to/confirm'
        console.log(response)
      }, err => {
        console.warn(err.responseText)
        console.log({ err })
      })
  }
}
