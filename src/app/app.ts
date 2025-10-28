import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { BfunmakerMyComponent } from './bfunmaker-my-component/bfunmaker-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { TsteeleMyComponent02 } from './tsteele-my-component-02/tsteele-my-component-02';

@Component({
	selector: 'app-root',
	imports: [
		SwPlanetFilms,
		TsteeleMyComponent02,
		TsteeleMyComponent,
		TsteeleMyComponent02,
		BfunmakerMyComponent,
		AkoroliovaMyComponent,
	],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
