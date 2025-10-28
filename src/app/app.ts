import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleMyComponent02 } from './tsteele-my-component-02/tsteele-my-component-02';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, TsteeleMyComponent02],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
