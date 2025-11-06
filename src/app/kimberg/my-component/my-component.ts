import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SwPlanetsService } from '../../sw-planets.service';
import { PlanetWithFilmCount } from '../../../sw-planet-model';

@Component({
	selector: 'app-my-component',
	imports: [MatCardModule, MatListModule],
	templateUrl: './my-component.html',
	styleUrl: './my-component.css',
})
export class MyComponent {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetWithFilmCount[] = this.planetSvc
		.getPlanetFilmDataForDisplay()
		.filter((p) => p.filmCount >= 3);
}
