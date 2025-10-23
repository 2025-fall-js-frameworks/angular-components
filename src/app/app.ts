import { Component, signal } from '@angular/core';
import { SwPlanetFilms } from './sw-planet-films/sw-planet-films';
import { TsteeleMyComponent } from './tsteele-my-component/tsteele-my-component';

@Component({
  selector: 'app-root',
  imports: [SwPlanetFilms, TsteeleMyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
