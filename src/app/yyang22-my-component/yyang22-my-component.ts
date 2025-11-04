import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-yyang22-my-component',
	imports: [MatCardModule],
	templateUrl: './yyang22-my-component.html',
	styleUrl: './yyang22-my-component.css',
})
export class Yyang22MyComponent implements OnInit {
	// Inject the service so we can get the planet climates...
	// private readonly planetSvc = inject(SwPlanetsService);

	// Ctor DI, with TS auto properties...
	constructor(private planetSvc: SwPlanetsService) {}

	// Climates to display....
	// protected readonly planetClimates: string[] = this.planetSvc.getPlanetClimates();
	protected planetClimates: string[] = [];

	ngOnInit(): void {
		this.planetClimates = this.planetSvc.getPlanetClimates();
	}
}
