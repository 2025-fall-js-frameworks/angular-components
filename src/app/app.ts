import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { MyComponent } from './kimberg/my-component/my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, MyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
