import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { MnguyenMyComponent } from './mnguyen-my-component/mnguyen-my-component';
import { BfunmakerMyComponent } from './bfunmaker-my-component/bfunmaker-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { Yyang22MyComponent } from './yyang22-my-component/yyang22-my-component';
import { MyComponent } from './kimberg/my-component/my-component';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';
import { TsteeleAddTwoNumbers } from './tsteele-add-two-numbers/tsteele-add-two-numbers';
import { AkoroliovaMyComponent02 } from './akoroliova-my-component-02/akoroliova-my-component-02';
@Component({
	selector: 'app-root',
	imports: [
		SwPlanetFilms,
		BfunmakerMyComponent,
		MyComponent,
		TsteeleMyComponent,
		AkoroliovaMyComponent,
		SwPlanetPopulation,
		Yyang22MyComponent,
		MnguyenMyComponent,
		TsteeleAddTwoNumbers,
		AkoroliovaMyComponent02
	],

	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
