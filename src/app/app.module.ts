import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppWorkoutComponent } from './app-workout.component';
import { ExercisesListComponent } from './exercises/exercises-list.component';
import { ExerciseThumbnailComponent } from './exercises/exercise-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppWorkoutComponent,
    ExercisesListComponent,
    ExerciseThumbnailComponent,
  ],
  bootstrap: [AppWorkoutComponent]
})
export class AppModule { }
