import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { JgyesAddTwoNumbers } from './jgyes-add-two-numbers/jgyes-add-two-numbers';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, JgyesAddTwoNumbers],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
