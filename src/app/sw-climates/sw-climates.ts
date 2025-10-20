import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { SwPlanetsService } from '../sw-planets.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sw-climates',
  imports: [MatFormField, MatLabel, MatSelect, MatOption, FormsModule],
  templateUrl: './sw-climates.html',
  styleUrl: './sw-climates.css'
})
export class SwClimates {

  private planetService = inject(SwPlanetsService);

  protected climates = this.planetService.getClimates();

  protected selectedClimate = signal("");

  protected planetsWithChosenClimate = signal<string[]>([]);

  protected onClimateChange = (c: any) => {
    this.selectedClimate.update(
      prev => c
    );

    this.planetsWithChosenClimate.update(
      prev => this.planetService.getPlanetsByClimate(this.selectedClimate())
    );
  };
}
