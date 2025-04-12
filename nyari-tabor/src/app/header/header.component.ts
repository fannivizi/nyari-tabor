import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "header"

  @Output() switchPage: EventEmitter<string> = new EventEmitter();

  constructor(){
    console.log("construtor called");
  }

  menuSwitch(pageValue: string) {
    this.switchPage.emit(pageValue);
  }
}
