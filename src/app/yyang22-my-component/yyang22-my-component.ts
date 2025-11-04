import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-yyang22-my-component',
	imports: [MatListModule],
	templateUrl: './yyang22-my-component.html',
	styleUrl: './yyang22-my-component.css',
})
export class Yyang22MyComponent {
	private readonly planetSvc = inject(SwPlanetsService);
	protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();
}
