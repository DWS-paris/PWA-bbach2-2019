import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {
  
  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor(
    private FormBuilder: FormBuilder
  ) { }

  private resetForm = ()  => {
    this.formData = this.FormBuilder.group({
      
      first_name: [ 'Julien', Validators.required ],
      last_name: [ 'Noyer', Validators.required ],
      email: [ 'juju@juju.com', Validators.required ],
      password: [ '12345', Validators.required ],
      password_repeate: [ '12345', Validators.required ],
      street: [ '21, boulevard de la République', Validators.required ],
      city: [ 'Aix-en-Provence', Validators.required ],
      country: [ 'France', Validators.required ],
      birthdate: [ '18/08/1979', Validators.required ],
      position: [ 'NULL', Validators.required ],
      type: [ 'admin', Validators.required ],
      zip_code: [ '13100', Validators.required ],
      cgu: [ true, Validators.required ],
    })
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value)
  }

  ngOnInit() {
    this.resetForm();
  }

}
