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

	// Planet Climates
	public getPlanetClimates = () => getClimates(allPlanets);

	// Get Planets of climate
	public getPlanetOfClimates = (climate: string) => getPlanetsByClimate(allPlanets, climate);
	// Planets
	public planetNames = allPlanets.map((planet) => planet.name);
}
