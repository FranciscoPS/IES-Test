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
    librosLeidosUltimosTresMeses: this.formBuilder.array([]),
    estadoCivil: [null, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get librosLeidosUltimosTresMeses() {
    return this.mainForm.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  get actualmentePracticasLectura() {
    return this.mainForm.controls['actualmentePracticasLectura'].value;
  }

  public checkForm(): void {
    console.log(this.actualmentePracticasLectura);
  }

  public addBook(): void {
    this.librosLeidosUltimosTresMeses.push(
      this.formBuilder.control('', [Validators.required])
    );
  }

  public removeBook(index: number): void {
    this.librosLeidosUltimosTresMeses.removeAt(index);
  }
}
