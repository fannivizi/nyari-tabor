import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NewUser } from '../../shared/models/new-user';
import { UserService } from '../../shared/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { SignUp } from '../../shared/models/sign-up';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{
  user: NewUser | null = null;
  signups : SignUp[] = []

  private subsription: Subscription | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subsription = this.userService.getUser().subscribe({
      next: (data) => {
        if (data) {
          this.user = data.user;
          this.signups = data.signups || [];
        } else {
          this.user = null;
          this.signups = [];
  }
      },
      error: (error) => { console.error("Hiba"), error }
    })
  }

  ngOnDestroy(): void {
    if(this.subsription) {
      this.subsription.unsubscribe();
    }
  }
  
}
