import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav/navbar.component' ;
import { AppWorkoutComponent } from './app-workout.component';
import { ExercisesListComponent } from './workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from './exercise-thumbnail/exercise-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NavBarComponent,
    AppWorkoutComponent,
    ExercisesListComponent,
    ExerciseThumbnailComponent,
  ],
  bootstrap: [AppWorkoutComponent]
})
export class AppModule { }
