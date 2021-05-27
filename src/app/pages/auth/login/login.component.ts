
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BOAuthenticationService } from '../../../services/auth/auth.service';

@Component({
  selector: 'bo-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class BOLoginComponent implements OnInit {

  form: FormGroup;
  email: FormControl;
  password: FormControl;

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  rememberMe = false;


  constructor(private router: Router,
    private loginSrvc: BOAuthenticationService,
  ) {
  }

  createFormControls() {
    this.email = new FormControl({ value: '', disabled: false }, Validators.required);
    this.password = new FormControl({ value: '', disabled: false }, Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  clearForm() {
    this.form.reset();

  }

  initForm() {
    this.createFormControls();
    this.createForm();
  }

  // register() {
  //   this.errors = [];
  //   this.messages = [];
  //   this.submitted = true;
  //   this.router.navigate(['/auth/register']);
  // }

  // goToResetPass() {
  //   this.errors = [];
  //   this.messages = [];
  //   this.submitted = true;
  //   this.router.navigate(['/auth/reset-pass']);
  // }

  login(): void {
    // this.router.navigate(['/pages/my-books'])

    this.errors = [];
    this.messages = [];
    this.submitted = true;
    const tempBody = {
      email: this.email.value,
      password: this.password.value,
    };
    this.loginSrvc.login(tempBody.email, tempBody.password)
      .subscribe((_data) => {
        console.log('Login correcto:', _data);
        // let title = 'Login correcto';
        // let content = 'Se ha autenticado correctamente';
        // let icon = 'far fa-thumbs-up';
        // this.dialogHandler.showToast(NestAppConstants.TOAST_TYPES.SUCCESS, title, content, icon);
        // this.router.navigate(['/pages/my-books']);
      });

  }

  getConfigValue(key: string): any {
    // return getDeepFromObject(this.options, key, null);
  }

  ngOnInit(): void {
    this.initForm();
  }

}
