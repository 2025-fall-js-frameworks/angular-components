import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
	selector: 'app-sw-planet-films',
	imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
	templateUrl: './sw-planet-films.html',
	styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetWithFilmCount[] =
		this.planetSvc.getPlanetFilmDataForDisplay();
}
