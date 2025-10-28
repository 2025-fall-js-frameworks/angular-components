import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, AkoroliovaMyComponent, TsteeleMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',

})
export class App {
	protected readonly title = signal('angular-components');
}
