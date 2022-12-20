import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public loginFormGroup: FormGroup = this.initForm(this._builder);

  constructor(
    private _authService: AuthService,
    private _builder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.initForm(this._builder);
  }

  /**
   * We're calling the login function on our auth service, passing in the username and password from the
   * form, and then subscribing to the observable that is returned
   */
  public onLogin(): void {
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
    if (response.exito || response.exito === false) {
      sessionStorage.setItem('logged', 'true');

      this._router.navigate(['/user/welcome']);
    }
  }

  private onLoginError(error: any) {
    this.openSnackBar('An error ocurred, try again later');

    console.error(error);
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      verticalPosition: 'top',
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
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
