import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';

@Component({
	selector: 'app-sw-planet-films',
	imports: [],
	templateUrl: './sw-planet-films.html',
	styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetWithFilmCount[] =
		this.planetSvc.getPlanetFilmDataForDisplay();
}
