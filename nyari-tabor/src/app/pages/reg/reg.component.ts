import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NewUser } from '../../shared/models/new-user';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss'
})
export class RegComponent {
  title = "reg"
  message = ""
  error = false

  constructor(private auth: AuthService, private router: Router) {}

  regForm = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", Validators.required),
    pw1: new FormControl("", Validators.required),
    pw2: new FormControl("", Validators.required)
  })

  reg(): void {
    if(!this.regForm.valid) {
      this.message = "Hibás adatok, kérjük ellenőrizze az űrlapot!"
      this.error = true;
      return
    }
    if(this.regForm.value.pw1 != this.regForm.value.pw2) {
      this.message = "Nem egyezik a két jelszó";
      this.error = true;
      return;
    }
    if(this.regForm.value.username == '' || this.regForm.value.email == '' || this.regForm.value.pw1 == '' || this.regForm.value.pw2 == '') {
      this.message = "Tölts ki minden mezőt!";
      this.error = true;
      return;
    }

    const newUser:Partial<NewUser> = {
      username: this.regForm.value.username || '',
      email: this.regForm.value.email || '',
      name: this.regForm.value.name || '',
      signups: []
    }

    const email = this.regForm.value.email || '';
    const pw = this.regForm.value.pw1 || '';

    this.auth.reg(email, pw, newUser).then(() => {
      this.message = "Sikeres regisztráció"
      this.error = false
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigateByUrl('/home')
    }).catch(error => {
      this.error = true;

      switch(error.code) {
        case 'auth/email-already-in-use':
          this.message = "Ez az email cím már foglalt."
          break;
        case "auth/weak-password":
          this.message = "Válassz erősebb jelszót!"
          break;
        default:
          this.message = "Hiba történt a regisztráció közben."
      }
    })

  }
}
