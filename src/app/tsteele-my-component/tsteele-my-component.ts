import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-tsteele-my-component',
	imports: [MatCardModule],
	templateUrl: './tsteele-my-component.html',
	styleUrl: './tsteele-my-component.css',
})
export class TsteeleMyComponent implements OnInit {
	// Ctor auto property DI too... Used to be most popular before inject()...
	constructor(private planetSvc: SwPlanetsService) {}

	protected planetClimates: string[] = [];

	ngOnInit(): void {
		this.planetClimates = this.planetSvc.getPlanetClimates();
	}
}
