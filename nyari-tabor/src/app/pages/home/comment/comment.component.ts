import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Comment} from '../../../shared/models/comment';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-comment',
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Output() commentSubmitted = new EventEmitter<Comment>();

  message = "";
  error = false;
  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    comment: new FormControl('')
  })

  submitComment() {
    if(!this.commentForm.valid) {
      this.message = "Nem megfelelő adatok";
      this.error = true;
      return;
    }

    const newComment: Comment = {
      id: 0,
      name: this.commentForm.value.name || '',
      rating: Number(this.commentForm.value.rating) || 0,
      comment: this.commentForm.value.comment || ''
    }

    this.message = "Komment elküldve"
    this.error = false;
    this.commentSubmitted.emit(newComment);
    console.log(newComment);
  }
}
