import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { BfunmakerAddSomeNumbers } from './bfunmaker-add-some-numbers/bfunmaker-add-some-numbers';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, BfunmakerAddSomeNumbers],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
