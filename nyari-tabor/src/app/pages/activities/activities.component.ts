import { Component } from '@angular/core';
import { Activity } from '../../shared/models/activity';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  imports: [MatCardModule, CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  title = "activities";
  hover: number = -1;

  activities: Activity[] = [
    {
      id: 0,
      title: "🏙 Városnézés",
      text: "Fedezzük fel együtt Szeged nevezetességeit, sétálunk a Tisza-parton és megismerkedünk a város történetével."
    },
    {
      id: 1,
      title: "🏊 Élményfürdő",
      text: "Egész napos szórakozás a Napfényfürdő Aquapolisban: csúszdák, pancsolók, medencék és vízi játékok."
    },
    {
      id: 2,
      title: "🎨 Kreatív Műhely",
      text: "Rajzolás, festés, kézműveskedés – minden nap más alkotó foglalkozással várunk."
    },
    {
      id: 3,
      title: "🎭 Színházlátogatás",
      text: "Elmegyünk egy izgalmas gyermekelőadásra a Szegedi Nemzeti Színházba."
    },
    {
      id: 4,
      title: "🦁 Állatkerti Kaland",
      text: "Kirándulás a Szegedi Vadasparkba – egzotikus állatok, állatbemutatók, sok-sok felfedezés."
    }
  ]

  trackById(index: number, item: Activity): number {
    return item.id;
  }
}
