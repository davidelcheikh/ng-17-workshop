import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

type colours = 'black' | 'red' | 'green';

@Component({
  selector: 'app-control-flows',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule],
  templateUrl: './control-flows.component.html',
  styleUrl: './control-flows.component.scss',
})
export class ControlFlowsComponent {
  htmlAt = "'&#64'";
  a = 4222;
  b = 56;

  myColour: colours = 'red';
  colours!: colours;
  alphas = ['a', 'b', 'c', 'd', 'e', 'f'];

  objs = [
    { name: 'David', age: 28, id: 1 },
    { name: 'Alexander', age: 30, id: 2 },
  ];
}
