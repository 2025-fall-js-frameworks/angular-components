import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { MnguyenMyComponent } from './mnguyen-my-component/mnguyen-my-component';
import { BfunmakerMyComponent } from './bfunmaker-my-component/bfunmaker-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';

@Component({
	selector: 'app-root',
	imports: [
		SwPlanetFilms,
		AkoroliovaMyComponent,
		TsteeleMyComponent,
		BfunmakerMyComponent,
		SwPlanetPopulation,
		MnguyenMyComponent,
	],
	templateUrl: './app.html',
	styleUrl: './app.css',

})
export class App {
	protected readonly title = signal('angular-components');
}
