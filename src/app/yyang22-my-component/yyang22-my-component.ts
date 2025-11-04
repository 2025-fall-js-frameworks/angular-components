import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-yyang22-my-component',
	imports: [MatCardModule],
	templateUrl: './yyang22-my-component.html',
	styleUrl: './yyang22-my-component.css',
})
export class Yyang22MyComponent {
	private readonly planetSvc = inject(SwPlanetsService);
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();
}
