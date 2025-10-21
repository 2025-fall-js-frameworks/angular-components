import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SwPlanetsService {
	public foo = () => {
		console.log('SwPlanetsService::foo called!');
		return 'bar123';
	};
}
