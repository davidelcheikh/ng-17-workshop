import { Component, inject } from '@angular/core';
import { CounterStore } from './store/counter.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-store',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './signal-store.component.html',
  styleUrl: './signal-store.component.scss',
  providers: [CounterStore],
})
export class SignalStoreComponent {
  readonly store = inject(CounterStore);
}
