import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { Yyang22MyComponent } from './yyang22-my-component/yyang22-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, Yyang22MyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
