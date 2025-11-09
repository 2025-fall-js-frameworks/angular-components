import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {
	allPlanets,
	getPlanetsWithFilmCount,
	getPlanetsWithPopulation,
	getClimates,
	getPlanetsByClimate,
} from '../sw-planet-model';
=======
import { allPlanets, getPlanetsWithFilmCount } from '../sw-planet-model';
>>>>>>> 932040019bb637eefcf899f4a586f432c37ef551

@Injectable({
	providedIn: 'root',
})
export class SwPlanetsService {
	public getPlanetFilmDataForDisplay = () => getPlanetsWithFilmCount(allPlanets);
<<<<<<< HEAD

	// Planets with population count
	public getPlanetsPopulationDataForDisplay = () => getPlanetsWithPopulation(allPlanets);

	// Planet Climates
	public getPlanetClimates = () => getClimates(allPlanets);

	// Get Planets of climate
	public getPlanetOfClimates = (climate: string) => getPlanetsByClimate(allPlanets, climate);
	// Planets
	public planetNames = allPlanets.map((planet) => planet.name);
=======
>>>>>>> 932040019bb637eefcf899f4a586f432c37ef551
}
