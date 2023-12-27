import { Component, inject } from '@angular/core';
import { CounterStore } from './store/counter.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signal-store',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './signal-store.component.html',
  styleUrl: './signal-store.component.scss',
})
export class SignalStoreComponent {
  readonly store = inject(CounterStore);
}
