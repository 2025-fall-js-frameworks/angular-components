import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { FsindarMyComponent } from './fsindar-my-component/fsindar-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, FsindarMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
