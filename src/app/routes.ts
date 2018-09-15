import { Routes } from '@angular/router';
import { WorkoutComponent } from './components/workout/workout.component';
// import { ExercisesListComponent } from './components/exercises-list/exercise-list.component';

export const appRoutes: Routes = [
    { path: 'workouts', component: WorkoutComponent },
    // { path: 'exercises', Component: ExercisesListComponent },
    { path: '', redirectTo: '/workouts', pathMatch: 'full' }
]