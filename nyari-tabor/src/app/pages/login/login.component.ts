import { Component } from '@angular/core';
import { AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatIconModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  error = false;
  message = "";

  constructor(private authService: AuthService) {
  }

  login() {
    if(this.loginForm.invalid) {
      this.message = "Hibás email cím vagy jelszó";
      this.error = true;
      return
    }

    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';

    this.authService.login(email, password).then(() => {
      this.message = "Sikeres bejelentkezés";
      this.error = false;
    }).catch(error => {
      this.error = true;
      this.message = "Hibás email vagy jelszó";
    })
  }
}
