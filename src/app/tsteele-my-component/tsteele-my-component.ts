import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-tsteele-my-component',
	imports: [MatCardModule],
	templateUrl: './tsteele-my-component.html',
	styleUrl: './tsteele-my-component.css',
})
export class TsteeleMyComponent {
	private readonly planetSvc = inject(SwPlanetsService);
	// injject the service so we can get the planet climates
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();
}
