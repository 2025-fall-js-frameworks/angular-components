import { Injectable } from '@angular/core';
import { allPlanets, getPlanetsWithFilmCount } from '../sw-planet-model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, expand, map, reduce, shareReplay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwPlanetsService {

  private readonly swapiPlanetsUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {
    this.getAllPlanetsCached().subscribe(planets => {
      this.cachedPlanets = planets;
    });
  }

  private planetsCache$?: Observable<any[]>;
  private cachedPlanets: any[] = [];

  public getAllPlanetsFromApi() {
    return this.http.get<any>(this.swapiPlanetsUrl).pipe(
      expand(page => page.next ? this.http.get<any>(page.next) : EMPTY),
      map(page => page.results),
      reduce((all: any[], results: any[]) => all.concat(results), [])
    );
  }

  public getAllPlanetsCached() {
    // Returns cached list across subscribers; fetches once until cleared.
    return this.planetsCache$ ??= this.getAllPlanetsFromApi().pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  public clearPlanetsCache() {
    this.planetsCache$ = undefined;
  }

  public getPlanetFilmDataForDisplay = () => getPlanetsWithFilmCount(
    this.cachedPlanets
  );
}
