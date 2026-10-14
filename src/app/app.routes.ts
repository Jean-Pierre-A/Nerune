import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InspiracionesComponent } from './inspiraciones/inspiraciones.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'inspiraciones-30ml', component: InspiracionesComponent },
  { path: '**', redirectTo: '' }
];
