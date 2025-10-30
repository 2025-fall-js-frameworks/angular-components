import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-ola-my-new-component-01',
	imports: [],
	templateUrl: './ola-my-new-component-01.html',
	styleUrl: './ola-my-new-component-01.css',
})
export class OlaMyNewComponent01 {
	protected readonly numberOne = signal(2);
	protected readonly numberTwo = signal(2);
	protected readonly answer = signal(4);

	// This lambda function get called when the button is clicked
	protected readonly updaueNumberOne = (newNumber: number) =>
		this.numberOne.update((prev) => newNumber);

	protected readonly addNumbers = () => {
		console.log('User pressed equal button');
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}
