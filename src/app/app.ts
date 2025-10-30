import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { OlaMyNewComponent01 } from './ola-my-new-component-01/ola-my-new-component-01';

@Component({
	// print
	selector: 'app-root',

	//Array of components
	imports: [SwPlanetFilms, OlaMyNewComponent01],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
