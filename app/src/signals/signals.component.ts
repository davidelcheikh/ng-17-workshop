import {
  Component,
  computed,
  signal,
  effect,
  WritableSignal,
  Signal,
} from '@angular/core';
import { StandaloneComponent } from '../standalone-components/standalone.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    CommonModule,
    StandaloneComponent,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  height = 180;

  firstName = signal('John');
  lastName: Signal<string> = signal('Doe');
  age = signal(30);

  fullName = computed(() => {
    // Cannot set a signal in a computed function to avoid infinite loops
    // this.firstName.set('elephant');
    return `${this.firstName()} ${this.lastName()}`;
  });

  // combineLatest([firstName$, lastName$]).pipe(
  //   map(([firstName, lastName]) => firstName + lastName)
  // );

  isAdult = computed(() => this.age() >= 18);

  $age = effect(() => {
    // Cannot set a signal in an effect to avoid infinite loops
    this.lastName();
    console.log(`The count is: ${this.age()}`);
  });

  changeAge(age: number) {
    this.age.set(age);
  }
}
