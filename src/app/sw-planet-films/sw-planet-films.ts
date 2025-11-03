import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { I18nPluralPipe } from '@angular/common';

@Component({
	selector: 'app-sw-planet-films',
	imports: [MatCardModule, MatListModule, I18nPluralPipe],
	templateUrl: './sw-planet-films.html',
	styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetWithFilmCount[] =
		this.planetSvc.getPlanetFilmDataForDisplay();

	protected readonly filmsMap = { '=1': '# film', other: ' # films' };
}
