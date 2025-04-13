import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Activity } from '../../../shared/models/activity';

@Component({
  selector: 'app-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  hover: number = -1;
  @Input() activity!: Activity;
}
