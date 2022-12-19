import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILoginResponse } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public loading: boolean = false;
  public loginFormGroup: FormGroup = this.initForm(this._builder);

  constructor(
    private _authService: AuthService,
    private _builder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.initForm(this._builder);
  }

  public onLogin(): void {
    this.loading = true;

    this._authService
      .login({
        username: this.loginFormGroup.value.username,
        password: this.loginFormGroup.value.password,
      })
      .subscribe({
        next: (res) => this.onLoginSuccess(res),
        error: (err) => this.onLoginError(err),
      });
  }

  private onLoginSuccess(response: ILoginResponse): void {
    const { mensaje } = response;

    this.openSnackBar(mensaje as any);

    this.loading = false;
  }

  private onLoginError(error: any) {
    this.openSnackBar('An error ocurred, try again later');

    console.error(error);

    this.loading = false;
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Close',{
      verticalPosition: 'top'
    });
  }

  /**
   * It creates a form group with two form controls, one for the username and one for the password
   * @param {FormBuilder} formBuilder - FormBuilder - This is the form builder service that we injected
   * into the constructor.
   * @returns A form group with two form controls.
   */
  private initForm(formBuilder: FormBuilder): FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }> {
    return formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
