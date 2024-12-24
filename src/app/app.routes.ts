import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'', pathMatch: 'full',redirectTo:'products'},
    {path:'counter',  loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)},
    {path:'products', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)}
];
