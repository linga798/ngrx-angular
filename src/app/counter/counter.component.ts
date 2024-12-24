import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../states/counter/counter.actions';
@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  standalone: true
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store:Store<AppState>){
    this.count$ = this.store.select(selectCount);
  }

  public increment(){
    console.log('sore:', this.store);
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset());
  }
}
