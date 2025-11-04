import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SwPlanetsService } from '../sw-planets.service';
import { allPlanets } from '../../sw-planet-model';

@Component({
	selector: 'app-bfunmaker-my-component',
	imports: [MatFormFieldModule, MatSelectModule],
	templateUrl: './bfunmaker-my-component.html',
	styleUrl: './bfunmaker-my-component.css',
})
export class BfunmakerMyComponent {
	selectedClimate: string = '';

	private readonly planetSvc = inject(SwPlanetsService);
	// injject the service so we can get the planet climates
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();

	planets = allPlanets;

	protected readonly selectedPlanets = this.planetSvc.getPlanetOfClimates(this.selectedClimate);
}
