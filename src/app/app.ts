import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { JegyesAddTwoNumbers } from './jegyes-add-two-numbers/jegyes-add-two-numbers';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, JegyesAddTwoNumbers],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
