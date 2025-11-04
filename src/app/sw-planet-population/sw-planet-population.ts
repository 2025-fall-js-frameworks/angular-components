import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFormattedPopulation } from '../../sw-planet-model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';


@Component({
	selector: 'app-sw-planet-population',
	imports: [ MatCardModule, MatListModule, CurrencyPipe ],
	templateUrl: './sw-planet-population.html',
	styleUrl: './sw-planet-population.css'
})
export class SwPlanetPopulation {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetPopulationsToDisplay: PlanetWithFormattedPopulation[] =
		this.planetSvc.getPlanetsPopulationDataForDisplay();
}
