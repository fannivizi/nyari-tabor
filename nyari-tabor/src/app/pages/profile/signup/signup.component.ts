import { Component, Input } from '@angular/core';
import { SignUp } from '../../../shared/models/sign-up';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() signup!: SignUp;
}
