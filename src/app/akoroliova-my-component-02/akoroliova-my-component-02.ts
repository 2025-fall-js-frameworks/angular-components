import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-akoroliova-my-component-02',
	imports: [],
	templateUrl: './akoroliova-my-component-02.html',
	styleUrl: './akoroliova-my-component-02.css',
})
export class AkoroliovaMyComponent02 {
	protected readonly numberOne = signal(2);
	protected readonly numberTwo = signal(2);
	protected readonly answer = signal(4);
	protected readonly updateNumberone = (newNumber: number) =>
		this.numberOne.update((prev) => newNumber);
	protected readonly addNumbers = () => {
		console.log('user press equal button');
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}
