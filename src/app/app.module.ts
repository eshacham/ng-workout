import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav/navbar.component' ;
import { AppMainComponent } from './app-main.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutDayComponent } from './workout-day/workout-day.component';
import { ExerciseThumbnailComponent } from './exercise-thumbnail/exercise-thumbnail.component';
import { ExerciseVariationComponent } from './exercise-variation/exercise-variation.component';
import { WorkoutService } from './shared/workout.service' ;
import { ToastrService } from './shared/toastr.service';
import { AudioService } from './shared/audio.service';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    NavBarComponent,
    AppMainComponent,
    WorkoutComponent,
    WorkoutDayComponent,
    ExerciseThumbnailComponent,
    ExerciseVariationComponent
  ],
  providers: [WorkoutService, ToastrService, AudioService],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
