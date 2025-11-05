import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { jegyesAddTwoNumbers } from './jegyes-add-two-numbers/jegyes-add-two-numbers';

@Component({
	selector: 'app-root',
	imports: [SwPlanetFilms, jegyesAddTwoNumbers],
// components
import { MnguyenMyComponent } from './mnguyen-my-component/mnguyen-my-component';
import { BfunmakerMyComponent } from './bfunmaker-my-component/bfunmaker-my-component';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';
import { Yyang22MyComponent } from './yyang22-my-component/yyang22-my-component';
import { MyComponent } from './kimberg/my-component/my-component';
import { AkoroliovaMyComponent } from './akoroliova-my-component/akoroliova-my-component';
import { SwPlanetPopulation } from './sw-planet-population/sw-planet-population';
import { CsMyComponent } from './cs-my-component/cs-my-component';
import { TsteeleAddTwoNumbers } from './tsteele-add-two-numbers/tsteele-add-two-numbers';
import { OlaMyComponent } from './ola-my-component/ola-my-component';
import { jegyesAddTwoNumbers } from './jegyes-add-two-numbers/jegyes-add-two-numbers';

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
		CsMyComponent,
		TsteeleAddTwoNumbers,
		OlaMyComponent,		
		jegyesAddTwoNumbers,
	],

	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('angular-components');
}
