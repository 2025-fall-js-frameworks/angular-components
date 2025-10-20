import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { SwClimates } from './sw-climates/sw-climates';

@Component({
  selector: 'app-root',
  imports: [SwPlanetFilms, SwClimates],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
