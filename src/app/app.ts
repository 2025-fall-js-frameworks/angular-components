import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, SwPlanetFilms],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
