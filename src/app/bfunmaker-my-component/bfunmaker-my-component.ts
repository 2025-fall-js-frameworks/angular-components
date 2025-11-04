import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-bfunmaker-my-component',
	imports: [MatCardModule, MatFormFieldModule, MatSelectModule],
	templateUrl: './bfunmaker-my-component.html',
	styleUrl: './bfunmaker-my-component.css',
})
export class BfunmakerMyComponent {
	// Inject service, so we can load climates
	protected readonly planetSvc: SwPlanetsService = inject(SwPlanetsService);

	// Load climates into a property
	protected readonly climates = this.planetSvc.getPlanetClimates();

	// Also add a property for the selected climate
}
