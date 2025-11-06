import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-mnguyen-my-component',
	imports: [MatCardModule, MatListModule],
	templateUrl: './mnguyen-my-component.html',
	styleUrl: './mnguyen-my-component.css',
})
export class MnguyenMyComponent {
	private planetSvc = inject(SwPlanetsService);

	protected readonly swPlanets: String[] = this.planetSvc.planetNames;
	protected readonly swPlanets2: String[] = this.planetSvc.planetNames;
	protected readonly swPlanets3 = this.swPlanets.filter(
		(planet) => !this.swPlanets2.includes(planet),
	);
}
