import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SwPlanetsService {
	public foo = () => {
		console.log('svc.foo was called !');
		return 'bar123';
	};
}
