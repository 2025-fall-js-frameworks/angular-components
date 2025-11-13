import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-fsindar-my-component',
  imports: [MatListModule, MatCardModule],
  templateUrl: './fsindar-my-component.html',
  styleUrl: './fsindar-my-component.css'
})
export class FsindarMyComponent {
   planetsWithoutHumans = [
    {
      name: 'Hoth',
      description:
        'An icy, uninhabitable world with no intelligent life; only creatures like wampas and tauntauns.'
    },
    {
      name: 'Dagobah',
      description:
        'Swamp planet filled with creatures but no known civilization; Yoda lived there in exile.'
    },
    {
      name: 'Endor',
      description:
        'Forest moon inhabited by Ewoks; no human civilization.'
    }
  ];
}
