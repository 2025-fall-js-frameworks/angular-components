import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-yyang22-my-component',
	imports: [MatCardModule],
	templateUrl: './yyang22-my-component.html',
	styleUrl: './yyang22-my-component.css',
})
export class Yyang22MyComponent {
	// Inject the service so we can get the planet climates...
	private readonly planetSvc = inject(SwPlanetsService);
	// Climates to display....
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();
}
