import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';

@Component({
  selector: 'app-root',
  imports: [
    SwPlanetFilms,
    TsteeleMyComponent,
    SwPlanetPopulation
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
	protected readonly title = signal('angular-components');
}
