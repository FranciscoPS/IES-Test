import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { whiteSpaceValidator } from 'src/app/shared/validators/whiteSpace.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

 /**
  * It returns the FormArray named 'librosLeidosUltimosTresMeses' from the mainForm
  * @returns The FormArray of the librosLeidosUltimosTresMeses property of the mainForm.
  */
  get librosLeidosUltimosTresMeses() {
    return this.mainForm.get('librosLeidosUltimosTresMeses') as FormArray;
  }

 /**
  * It returns the value of the control named 'actualmentePracticasLectura' in the mainForm
  * @returns The value of the control 'actualmentePracticasLectura'
  */
  get actualmentePracticasLectura() {
    return this.mainForm.controls['actualmentePracticasLectura'].value;
  }

  /**
   * The function checks the form and logs the value of the control 'librosLeidosUltimosTresMeses' to
   * the console
   */
  public checkForm(): void {
    console.log(this.mainForm.controls['librosLeidosUltimosTresMeses'].value);
  }

  /**
   * It adds a new form control to the array of form controls
   */
  public addBook(): void {
    this.librosLeidosUltimosTresMeses.push(
      this.formBuilder.control('', [Validators.required])
    );
  }

  /**
   * "Remove the book at the given index from the list of books read in the last three months."
   * 
   * The first line of the function is a comment. Comments are ignored by the compiler. They are used
   * to document the code
   * @param {number} index - number - The index of the item to remove.
   */
  public removeBook(index: number): void {
    this.librosLeidosUltimosTresMeses.removeAt(index);
  }

  /**
   * We are adding a listener to the actualmentePracticasLectura control, and if the value is true, we
   * are adding the required validator to the librosLeidosUltimosTresMeses control, otherwise we are
   * clearing the validators
   */
  private initForm(): void{
    this.mainForm = this.formBuilder.group({
      nombres: ['', [Validators.required, whiteSpaceValidator()]],
      apellidos: ['', [Validators.required]],
      fumas: [null, [Validators.required]],
      actualmentePracticasLectura: [null, [Validators.required]],
      librosLeidosUltimosTresMeses: this.formBuilder.array([], Validators.required),
      estadoCivil: [null, [Validators.required]],
    });

    this.mainForm.get('actualmentePracticasLectura')?.valueChanges.subscribe(val => {
      if(val){
        this.mainForm.controls['librosLeidosUltimosTresMeses'].setValidators([Validators.required])
      }else{
        this.mainForm.controls['librosLeidosUltimosTresMeses'].clearValidators()
      }

      this.mainForm.controls['librosLeidosUltimosTresMeses'].updateValueAndValidity();
    });
  }
}
