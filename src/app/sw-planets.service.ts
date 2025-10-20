import { Injectable } from '@angular/core';
import { allPlanets, getPlanetsWithFilmCount, getClimates, getPlanetsByClimate } from '../sw-planet-model';

@Injectable({
  providedIn: 'root'
})
export class SwPlanetsService {

  public getPlanetFilmDataForDisplay = () => getPlanetsWithFilmCount(
    allPlanets
  );

  public getClimates = () => getClimates(
    allPlanets
  );

  public getPlanetsByClimate = (climate: string) => getPlanetsByClimate(
    allPlanets,
    climate
  );
}
