import { AfterViewInit, Component, inject, viewChild, ViewChild } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

type PlanetForDisplayAndBehavior = PlanetWithFilmCount & { fave: boolean };

@Component({
	selector: 'app-sw-planet-films',
	imports: [
		MatCard,
		MatCardHeader,
		MatCardTitle,
		MatCardContent,
		MatTableModule,
		MatPaginatorModule,
	],
	templateUrl: './sw-planet-films.html',
	styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms implements AfterViewInit {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetForDisplayAndBehavior[] = this.planetSvc
		.getPlanetFilmDataForDisplay()
		.map((x) => ({
			...x,
			fave: false,
		}));

	displayedColumns = ['fave', 'name', 'filmCount'];

	dataSource = new MatTableDataSource<PlanetWithFilmCount>(this.planetsToDisplay);

	private paginator = viewChild(MatPaginator);

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator();
	}
}
