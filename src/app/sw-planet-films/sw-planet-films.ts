import { Component, inject, OnInit, signal, WritableSignal, computed } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';
import { PlanetWithFilmCount } from '../../sw-planet-model';
import {
  MatCard,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatBadge } from '@angular/material/badge';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

type PlanetDisplay = {
  rank: string;
  name: string;
  filmCount: number;
  mostFilms: boolean;
  fave: boolean;
};

@Component({
  selector: 'app-sw-planet-films',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatCardFooter,
    MatBadge,
    MatCheckbox,
    MatButton,
  ],
  templateUrl: './sw-planet-films.html',
  styleUrl: './sw-planet-films.css',
})
export class SwPlanetFilms implements OnInit {
  private planetService = inject(SwPlanetsService);

  protected planetsToDisplay: WritableSignal<PlanetDisplay[]> = signal([]);

  protected readonly selectedFavesCount = computed(
    () => this.planetsToDisplay().filter((x) => x.fave).length
  );

  protected readonly sumOfFilmCounts = computed(() =>
    this.planetsToDisplay()
      .filter((x) => x.fave)
      .reduce((acc, x) => acc + x.filmCount, 0)
  );

  ngOnInit(): void {
    this.planetService.getAllPlanetsCached().subscribe(cachedPlanets => {
      const planets = this.planetService.getPlanetFilmDataForDisplay();

      const maxFilms = Math.max(...planets.map((x) => x.filmCount));

      this.planetsToDisplay.update((prev) =>
        planets.map((x) => {
          const firstIndex = planets.findIndex((y) => y.filmCount === x.filmCount);

          const lastIndex = planets.findLastIndex((y) => y.filmCount === x.filmCount);

          return {
            rank: `${firstIndex === lastIndex ? '' : 'T'}${firstIndex + 1}`,
            name: x.name,
            filmCount: x.filmCount,
            mostFilms: x.filmCount === maxFilms,
            fave: false,
          };
        })
      );
    });
  }

  protected faveToggled = (p: PlanetDisplay) => {
    console.log('here');
    return this.planetsToDisplay.update((prev) =>
      prev.map((x) => ({
        ...x,
        fave: x === p ? !x.fave : x.fave,
      }))
    );
  };

  protected faveAll = (check: boolean) => this.planetsToDisplay.update(
    prev => prev.map(
      x => ({
        ...x,
        fave: check
      })
    )
  );
}
