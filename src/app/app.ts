import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleMyComponent02 } from './tsteele-my-component-02/tsteele-my-component-02';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, TsteeleMyComponent02, TsteeleMyComponent],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
