import {
	AfterViewInit,
	Component,
	computed,
	inject,
	signal,
	viewChild,
	ViewChild,
	WritableSignal,
} from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

type PlanetForDisplayAndBehavior = PlanetWithFilmCount & { fave: boolean };

@Component({
	selector: 'app-sw-planet-films',
	imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
	templateUrl: './sw-planet-films.html',
	styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms implements AfterViewInit {
	private planetSvc = inject(SwPlanetsService);

	protected readonly planetsToDisplay: PlanetWithFilmCount[] =
		this.planetSvc.getPlanetFilmDataForDisplay();

	displayedColumns = ['fave', 'name', 'filmCount'];

	protected dataSource: any;
	private paginator = viewChild(MatPaginator);

	protected planetsWithFaveBehavior: WritableSignal<PlanetForDisplayAndBehavior[]> = signal([]);

	ngAfterViewInit() {
		this.planetsWithFaveBehavior.update((prev) =>
			this.planetsToDisplay.map((x) => ({
				...x,
				fave: false,
			})),
		);

		this.dataSource = new MatTableDataSource<PlanetForDisplayAndBehavior>(
			this.planetsWithFaveBehavior(),
		);

		this.dataSource.paginator = this.paginator();
	}

	toggleFave = (planetToToggle: PlanetForDisplayAndBehavior) => {
		console.log(`here ${planetToToggle.name}`);
		this.planetsWithFaveBehavior.update((prev) =>
			prev.map((x) => ({
				...x,
				fave: x === planetToToggle ? !x.fave : x.fave,
			})),
		);

		this.dataSource.data = this.planetsWithFaveBehavior();
	};

	faveCount = computed(() => this.planetsWithFaveBehavior().filter((x) => x.fave).length);
}
