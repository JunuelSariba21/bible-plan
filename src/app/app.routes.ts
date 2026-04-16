import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { DashboardComponent } from './pages/dashboard/dashboard';

import { Plan30Component } from './pages/plans/plan30/plan30';
import { Plan90Component } from './pages/plans/plan90/plan90';
import { OldTestamentComponent } from './pages/plans/old-testament/old-testament';
import { NewTestamentComponent } from './pages/plans/new-testament/new-testament';

import { Day1Component } from './pages/readings/day1/day1';
import { Day2Component } from './pages/readings/day2/day2';

import { ProfileComponent } from './pages/profile/profile';
import { ProgressComponent } from './pages/progress/progress';
import { Day3Component } from './pages/readings/day3/day3';
import { Day4Component } from './pages/readings/day4/day4';
import { Day5Component } from './pages/readings/day5/day5';
import { Day6Component } from './pages/readings/day6/day6';
import { Day7 } from './pages/readings/day7/day7';
import { Day8 } from './pages/readings/day8/day8';
import { Day9 } from './pages/readings/day9/day9';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'plan30', component: Plan30Component },
  { path: 'plan90', component: Plan90Component },
  { path: 'old-testament', component: OldTestamentComponent },
  { path: 'new-testament', component: NewTestamentComponent },

  { path: 'day1', component: Day1Component },
  { path: 'day2', component: Day2Component },
  { path: 'day3', component: Day3Component },
  { path: 'day4', component: Day4Component },
  { path: 'day5', component: Day5Component },
  { path: 'day6', component: Day6Component },
  { path: 'day7', component: Day7 },
  { path: 'day8', component: Day8 },
  { path: 'day9', component: Day9 },

  { path: 'profile', component: ProfileComponent },
  { path: 'progress', component: ProgressComponent }
];