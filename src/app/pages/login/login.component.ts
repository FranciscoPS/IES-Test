import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILoginResponse } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public loginFormGroup: FormGroup = this.initForm(this._builder);

  constructor(
    private _authService: AuthService,
    private _builder: FormBuilder
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
      .subscribe(this.onLoginSuccess.bind(this), this.onLoginFail.bind(this));
  }

  private onLoginSuccess(response: ILoginResponse): void {
    console.log(response);

    this.loading = false;
  }

  private onLoginFail(error: any) {
    console.log(error);

    this.loading = false;
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
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
