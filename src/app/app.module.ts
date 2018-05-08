import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppWorkoutComponent } from './app-workout.component';
import { ExercisesListComponent } from './exercises/exercises-list.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppWorkoutComponent,
    ExercisesListComponent
  ],
  bootstrap: [AppWorkoutComponent]
})
export class AppModule { }
