import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUp } from '../../shared/models/sign-up'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  title = "signup"
  message = ""
  error = false

  signUpForm = new FormGroup({
    parent: new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+36(20|30|70)\d{3}\d{4}$/)])
    }),
    child: new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(5), Validators.max(16)])
    }),
    message: new FormControl('')
  })

  constructor(private router: Router, private auth: AuthService) {}

  signup(): void {
    if(!this.signUpForm.valid) {
      this.message = "Hibás adatok, kérjük ellenőrizze az űrlapot!"
      this.error = true;
      return
    }

    const newSignup: SignUp = {
      parent: {
        name: this.signUpForm.value.parent?.name || '',
        email: this.signUpForm.value.parent?.email || '',
        phone: this.signUpForm.value.parent?.phone || ''
    },
    child: {
        name: this.signUpForm.value.child?.name || '',
        age: Number(this.signUpForm.value.child?.age) || 0
    },
    message: this.signUpForm.value.message || ''
    };

    if(newSignup.parent.name == '' || newSignup.parent.email == '' || newSignup.parent.phone == '' || newSignup.child.name == '') {
      this.message = "Kérjük töltsön ki minden mezőt"
      this.error = true;
      return;
    }

    this.message = "Sikeres regisztráció!"
    
    setTimeout(() => {
      this.router.navigateByUrl('/home')
    }, 5000)
  }

  loggedIn() {
    return this.auth.loggedIn() == "true";
  }
}
