import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleAddTwoNumbers } from './tsteele-add-two-numbers/tsteele-add-two-numbers';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, TsteeleAddTwoNumbers],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
