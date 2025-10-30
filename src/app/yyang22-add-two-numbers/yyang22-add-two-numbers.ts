import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-yyang22-add-two-numbers',
	imports: [],
	templateUrl: './yyang22-add-two-numbers.html',
	styleUrl: './yyang22-add-two-numbers.css',
})
export class Yyang22AddTwoNumbers {
	protected readonly numberOne = signal(2);
	protected readonly numberTwo = signal(2);
	protected readonly answer = signal(4);

	protected readonly updateNumberOne = (newNumber: number) =>
		this.numberOne.update((prev) => newNumber);

	protected readonly addNumbers = () => {
		console.log('User pressed equal button');
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}
