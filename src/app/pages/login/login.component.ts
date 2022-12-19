import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup = this.initForm(this._builder);

  constructor(
    private _authService: AuthService,
    private _builder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm(this._builder);
  }

  public onLogin(): void {
    console.log(this.loginFormGroup);

    this._authService
      .login({
        username: this.loginFormGroup.value.username,
        password: this.loginFormGroup.value.password,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

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
