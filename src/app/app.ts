import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { BfunmakerMyComponent } from './bfunmaker-my-component/bfunmaker-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { MyComponent } from './kimberg/my-component/my-component';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';

@Component({
	selector: 'app-root',
	imports: [
		SwPlanetFilms,
		BfunmakerMyComponent,
		MyComponent,
		TsteeleMyComponent,
		AkoroliovaMyComponent,
		SwPlanetPopulation,
	],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
