import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
  selector: 'app-ugur-my-component',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './ugur-my-component.html',
  styleUrls: ['./ugur-my-component.css']
})
export class UgurMyComponent {
  private svc = inject(SwPlanetsService);

  // Hocanın dediği gibi: servisten veri al + filtrele
 
    planetsToDisplay = this.svc
    .getPlanetFilmDataForDisplay()
    .filter(p => {
      const ch = p.name?.[0] ?? '';
      return ch === 'T' || ch === 'N' || ch === 'C';
    });
  

  // ngFor kullanmadan göstermek için listeyi string haline getiriyoruz
  planetTextList = this.planetsToDisplay
    .map(p => `${p.name} (${p.filmCount} films)`)
    .join(', ');
}
