import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav/navbar.component' ;
import { AppMainComponent } from './app-main.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDayComponent } from './workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from './exercise-thumbnail/exercise-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NavBarComponent,
    AppMainComponent,
    WorkoutComponent,
    WorkoutDayComponent,
    ExerciseThumbnailComponent,
  ],
   bootstrap: [AppMainComponent]
})
export class AppModule { }
