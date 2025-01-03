import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { reduce } from 'rxjs';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
  provideHttpClient(withFetch()),  
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes), provideClientHydration(withEventReplay()), 
  provideStore(),
  provideState({name:'counter', reducer: counterReducer}),
  provideState({name:'cart', reducer: cartReducer})
]
};
