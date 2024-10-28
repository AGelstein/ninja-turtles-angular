import { Component, computed, OnInit, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements OnInit {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() =>  this.count() * 2);

ngOnInit(): void {
  console.log('count: ', this.count());
  console.log('double count: ', this.doubleCount());
 }

increment(): void {
  console.log('increment: ', this.count());
  this.count.update(value => value + 1);
}

decrement(): void {
  this.count.update(value => value - 1);
}

reset(): void {
  this.count.set(0);
}
}
