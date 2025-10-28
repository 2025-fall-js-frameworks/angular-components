import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { MyComponent } from './kimberg/my-component/my-component';


@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, MyComponent, TsteeleMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',

})
export class App {
	protected readonly title = signal('angular-components');
}
