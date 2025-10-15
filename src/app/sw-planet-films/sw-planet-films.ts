import { Component, inject, OnInit } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';

type PlanetDisplay = {
  rank: string;
  name: string;
  filmCount: number;
  mostFilms: boolean;
};

@Component({
  selector: 'app-sw-planet-films',
  imports: [],
  templateUrl: './sw-planet-films.html',
  styleUrl: './sw-planet-films.css'
})
export class SwPlanetFilms implements OnInit {

  private planetService = inject(SwPlanetsService);

  protected planetsToDisplay: PlanetDisplay[] = [];

  ngOnInit(): void {

    const planets = this.planetService.getPlanetFilmDataForDisplay();

    const maxFilms = Math.max(
      ...planets.map(
        x => x.filmCount
      )
    );
    
    this.planetsToDisplay = planets
      .map(
        x => {
          const firstIndex = planets.findIndex(
            y => y.filmCount === x.filmCount
          );

          const lastIndex = planets.findLastIndex(
            y => y.filmCount === x.filmCount
          );

          return {
            rank: `${firstIndex === lastIndex ? '' : 'T'}${firstIndex + 1}`,
            name: x.name,
            filmCount: x.filmCount,
            mostFilms: x.filmCount === maxFilms,
          };
        }
      )
  ;
  }
}
