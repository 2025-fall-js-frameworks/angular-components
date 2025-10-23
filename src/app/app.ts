import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
