import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  Form,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public mainForm: FormGroup = this.formBuilder.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    fumas: [null, [Validators.required]],
    actualmentePracticasLectura: [null, [Validators.required]],
    librosLeidosUltimosTresMeses: this.formBuilder.array([
      this.formBuilder.control('', [Validators.required]),
    ]),
    estadoCivil: [null, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get librosLeidosUltimosTresMeses() {
    return this.mainForm.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  public checkForm(): void {
    console.log(this.mainForm.controls['fumas'].value);
  }

  public addBook(): void {
    this.librosLeidosUltimosTresMeses.push(
      this.formBuilder.control('', [Validators.required])
    );
  }

}
