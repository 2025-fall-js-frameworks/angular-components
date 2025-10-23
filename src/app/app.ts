import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { MnguyenMyComponent } from './mnguyen-my-component/mnguyen-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, MnguyenMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
