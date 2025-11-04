import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-tsteele-my-component',
	imports: [MatCardModule],
	templateUrl: './tsteele-my-component.html',
	styleUrl: './tsteele-my-component.css',
})
export class TsteeleMyComponent implements OnInit {
	// Inject the service so we can get the planet climates...
	//private readonly planetSvc = inject(SwPlanetsService);

	// Ctor DI, with TS auto properties...
	constructor(private planetSvc: SwPlanetsService) {}

	// Climates to display...
	protected planetClimates: string[] = [];

	ngOnInit(): void {
		this.planetClimates = this.planetSvc.getPlanetClimates();
	}
}
