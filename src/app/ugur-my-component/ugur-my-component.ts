import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ugur-my-component',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './ugur-my-component.html',
  styleUrls: ['./ugur-my-component.css']
})
export class UgurMyComponent {}
