import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-tsteele-add-two-numbers',
	imports: [],
	templateUrl: './tsteele-add-two-numbers.html',
	styleUrl: './tsteele-add-two-numbers.css',
})
export class TsteeleAddTwoNumbers {
	protected readonly answer = signal(4);

	protected readonly addTwoNumbers = () => {
		this.answer.update((prev) => 42);
	};
}
