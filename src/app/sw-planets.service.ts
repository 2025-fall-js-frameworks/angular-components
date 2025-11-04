import { Injectable } from '@angular/core';
import {
	allPlanets,
	getPlanetsWithFilmCount,
	getPlanetsWithPopulation,
	getClimates,
	getPlanetsByClimate,
} from '../sw-planet-model';

@Injectable({
	providedIn: 'root',
})
export class SwPlanetsService {
	// Planets with film count
	public getPlanetFilmDataForDisplay = () => getPlanetsWithFilmCount(allPlanets);

	// Planets with population count
	public getPlanetsPopulationDataForDisplay = () => getPlanetsWithPopulation(allPlanets);

	// Planet climates
	public getPlanetClimates = () => getClimates(allPlanets);

	// Planets by climate
	public getPlanetsForClimate = (climate: string) => getPlanetsByClimate(allPlanets, climate);
}
