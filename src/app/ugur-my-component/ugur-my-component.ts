import { Component, inject } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-ugur-my-component',
	imports: [],
	templateUrl: './ugur-my-component.html',
	styleUrl: './ugur-my-component.css',
})
export class UgurMyComponent {
	// Inject the service.
	private planetSvc = inject(SwPlanetsService);

	// Use the service to load planets
	// And filter and map to the one's you want
	protected readonly planetsToDisplay = this.planetSvc
		.getPlanetFilmDataForDisplay()
		.filter((x) => ['Tatooine', 'Naboo', 'Coruscant'].includes(x.name))
		.map((x) =>
			x.name === 'Tatooine'
				? 'Tatooine (desert, 2 suns)'
				: x.name === 'Naboo'
					? 'Naboo (lakes & medows)'
					: 'Coruscant (city planet)',
		);
}
