import { Component, computed, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SwPlanetsService } from '../sw-planets.service';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-bfunmaker-my-component',
	imports: [MatFormFieldModule, MatSelectModule, MatCardModule],
	templateUrl: './bfunmaker-my-component.html',
	styleUrl: './bfunmaker-my-component.css',
})
export class BfunmakerMyComponent {
	private readonly planetSvc = inject(SwPlanetsService);
	// injject the service so we can get the planet climates
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();

	protected readonly selectedClimate = signal('arid');

	protected readonly selectedPlanets = computed(() =>
		this.planetSvc.getPlanetOfClimates(this.selectedClimate()),
	);
}
