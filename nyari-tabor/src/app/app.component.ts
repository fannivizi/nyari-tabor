import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {ActivitiesComponent} from './pages/activities/activities.component';
import {SignupComponent} from './pages/signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, ActivitiesComponent, SignupComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nyari-tabor';
  page = "home";

  changePage(page: string) {
    console.log("Changing page to:", page);
    this.page = page;
  }
}
