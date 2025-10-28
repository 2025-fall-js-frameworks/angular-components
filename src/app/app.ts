import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { MyComponent } from './kimberg/my-component/my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, MyComponent, TsteeleMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',

})
export class App {
	protected readonly title = signal('angular-components');
}
