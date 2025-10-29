import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { OlaMyComponent } from './ola-my-component/ola-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, OlaMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
