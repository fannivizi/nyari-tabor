import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  message = ""

  @Output() switchPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
    this.switchPage.emit(pageValue);
  }
}
