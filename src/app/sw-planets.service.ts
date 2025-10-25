import { Injectable } from '@angular/core';
import { allPlanets, getPlanetsWithFilmCount } from '../sw-planet-model';

@Injectable({
  providedIn: 'root'
})
export class SwPlanetsService {

  public getPlanetFilmDataForDisplay = () => getPlanetsWithFilmCount(allPlanets); 

}
