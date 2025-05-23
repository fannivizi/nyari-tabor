import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Comment } from '../../shared/models/comment';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, CommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "home";
  error = false;
  message = "";

  constructor(private auth: AuthService, private router: Router) {}

  loggedIn() {
    return this.auth.loggedIn() == "true";
  }

  to_signup() {
    this.router.navigateByUrl("/signup");
  }

  handle_comment(comment: Comment) {
    this.message = `Köszönjük, ${comment.name}! Az üzeneted (${comment.comment}) elküldésre került!`;
  }
}
