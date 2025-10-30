import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-bfunmaker-add-some-numbers',
	imports: [],
	templateUrl: './bfunmaker-add-some-numbers.html',
	styleUrl: './bfunmaker-add-some-numbers.css',
})
export class BfunmakerAddSomeNumbers {
	protected readonly firstNumberInput = signal(2);
	protected readonly secondNumberInput = signal(2);
	protected readonly answer = signal(4);

	protected readonly updateFirstInput = (newNumber: number) =>
		this.firstNumberInput.update((prev) => newNumber);

	protected readonly addNumbers = () => {
		console.log('User used calculate button');
		this.answer.update((prev) => this.firstNumberInput() + this.secondNumberInput());
	};
}
