import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, SwPlanetPopulation],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
