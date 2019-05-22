import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {
  
  @Output() formSubmit = new EventEmitter()
  public formData: FormGroup;

  constructor(
    private FormBuilder: FormBuilder
  ) { }

  private resetForm = ()  => {
    this.formData = this.FormBuilder.group({
      email: [ 'juju@juju.com', Validators.required ],
      password: [ '12345', Validators.required ],
    })
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value);
  }

  ngOnInit() {
    this.resetForm();
  }

}
