import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { allPlanets } from '../../sw-planet-model';

type row = { name: string; filmCount: number; hasResidents: boolean };

@Component({
	selector: 'app-akoroliova-my-component',
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		MatButtonModule,
		MatListModule,
	],
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
			.filter((p) => (s ? p.name.toLowerCase().startsWith(s) : true))
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
