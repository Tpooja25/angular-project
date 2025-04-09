import { Routes } from '@angular/router';
import { PracticeFormComponent } from './components/practice-form/practice-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'practice-form',component:PracticeFormComponent},
    {path:'dashboard',component:DashboardComponent},
];
