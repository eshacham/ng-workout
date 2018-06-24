import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav/navbar.component' ;
import { AppMainComponent } from './app-main.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDayComponent } from './workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from './exercise-thumbnail/exercise-thumbnail.component';
import { WorkoutService } from './shared/workout.service' ;

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
  providers: [WorkoutService],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
