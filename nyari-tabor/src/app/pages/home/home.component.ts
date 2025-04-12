import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "home";

  @Output() switchPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
    this.switchPage.emit(pageValue);
  }
}
