import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IMaritalStatusCatalog } from 'src/app/shared/models/catalogs.model';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { whiteSpaceValidator } from 'src/app/shared/validators/whiteSpace.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public mainForm!: FormGroup;
  public maritalStatusCatalog: IMaritalStatusCatalog[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private catalogService: CatalogService,
    private alert: AlertsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fillMaritalStatusCatalog();
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
   * If the form is valid, show a success notification, otherwise show an error notification
   */
  public checkForm(): void {
    if (this.mainForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'The form is valid!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Please check again your answers',
      });
    }
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
  private initForm(): void {
    this.mainForm = this.formBuilder.group({
      nombres: ['', [Validators.required, whiteSpaceValidator()]],
      apellidos: ['', [Validators.required]],
      fumas: [null, [Validators.required]],
      actualmentePracticasLectura: [null, [Validators.required]],
      librosLeidosUltimosTresMeses: this.formBuilder.array(
        [],
        Validators.required
      ),
      estadoCivil: [null, [Validators.required]],
    });

    this.mainForm
      .get('actualmentePracticasLectura')
      ?.valueChanges.subscribe((val) => {
        if (val) {
          this.mainForm.controls['librosLeidosUltimosTresMeses'].setValidators([
            Validators.required,
          ]);
        } else {
          this.mainForm.controls[
            'librosLeidosUltimosTresMeses'
          ].clearValidators();
        }

        this.mainForm.controls[
          'librosLeidosUltimosTresMeses'
        ].updateValueAndValidity();
      });
  }

  /**
   * We're calling the getMaritalStatusCatalog() function from the catalogService, which returns an
   * observable. We subscribe to that observable, and when the observable returns a value, we assign
   * that value to the maritalStatusCatalog property
   */
  private fillMaritalStatusCatalog(): void {
    this.catalogService.getMaritalStatusCatalog().subscribe({
      next: (res) => {
        if (!res) return;

        this.maritalStatusCatalog = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
