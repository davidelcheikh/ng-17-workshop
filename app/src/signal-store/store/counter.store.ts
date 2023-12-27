import { computed } from '@angular/core';
import {
  signalStore,
  patchState,
  withComputed,
  withMethods,
  withState,
  withHooks,
} from '@ngrx/signals';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState({ count: 0 }),
  withComputed(({ count }) => ({
    doubleCount: computed(() => count() * 2),
  })),
  withMethods(({ count, ...store }) => ({
    increment() {
      patchState(store, { count: count() + 1 });
    },
    decrement() {
      patchState(store, { count: count() - 1 });
    },
  })),
  withHooks({
    onInit({ increment }) {
      interval(2_000)
        .pipe(takeUntilDestroyed())
        .subscribe(() => increment());
    },
    onDestroy({ count }) {
      console.log('count on destroy', count());
    },
  }),
);
