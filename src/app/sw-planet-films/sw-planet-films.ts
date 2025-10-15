import { Component, inject, signal } from '@angular/core';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
  selector: 'app-sw-planet-films',
  imports: [],
  templateUrl: './sw-planet-films.html',
  styleUrl: './sw-planet-films.css'
})
export class SwPlanetFilms {

  private planetService = inject(SwPlanetsService);

  protected readonly bar = signal(this.planetService.foo())
}
