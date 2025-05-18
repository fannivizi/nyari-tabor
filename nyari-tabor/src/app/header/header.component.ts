import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "header"
  menuOpen: boolean = false;

  constructor(public auth: AuthService) {}
}
