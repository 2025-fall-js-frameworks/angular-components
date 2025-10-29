import { Component } from '@angular/core';
import { allPlanets } from '../../sw-planet-model';

type row = { name: string; filmCount: number; hasResidents: boolean };

@Component({
	selector: 'app-akoroliova-my-component',
	standalone: true,
	templateUrl: './akoroliova-my-component.html',
})
export class AkoroliovaMyComponent {
	data: row[] = allPlanets
		.map((p) => ({
			name: p.name,
			filmCount: p.films.length,
			hasResidents: p.residents.length > 0,
		}))
		.filter((p) => p.filmCount > 0);

	search = '';
	minFilms = 0;
	onlyWithResidents = false;

	get filtered(): row[] {
		const s = this.search.trim().toLowerCase();
		return this.data
			.filter((p) => (s ? p.name.toLowerCase().includes(s) : true))
			.filter((p) => p.filmCount >= this.minFilms)
			.filter((p) => (this.onlyWithResidents ? p.hasResidents : true))
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	reset() {
		this.search = '';
		this.minFilms = 0;
		this.onlyWithResidents = false;
	}
}
