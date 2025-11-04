import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-jgyes-add-two-numbers',
	imports: [],
	templateUrl: './jgyes-add-two-numbers.html',
	styleUrl: './jgyes-add-two-numbers.css',
})
export class JgyesAddTwoNumbers {
	protected readonly numberOne = signal(2);
	protected readonly numberTwo = signal(2);
	protected readonly answer = signal(4);

	protected readonly updateNumberOne = (newNumber: number) =>
		this.numberOne.update((prev) => newNumber);

	protected readonly addNumbers = () => {
		console.log('user pressed equal button');
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}
