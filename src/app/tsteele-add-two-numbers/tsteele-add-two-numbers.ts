import { Component, computed, signal } from '@angular/core';

@Component({
	selector: 'app-tsteele-add-two-numbers',
	imports: [],
	templateUrl: './tsteele-add-two-numbers.html',
	styleUrl: './tsteele-add-two-numbers.css',
})
export class TsteeleAddTwoNumbers {
	protected readonly numberOne = signal(5);
	protected readonly numberTwo = signal(5);
	protected readonly answer = signal(10);

	protected readonly updateNumberOne = (newValue: number) =>
		this.numberOne.update((prev) => newValue);

	protected readonly updateNumberTwo = (newValue: number) =>
		this.numberTwo.update((prev) => newValue);

	protected readonly addTwoNumbers = () => {
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}
