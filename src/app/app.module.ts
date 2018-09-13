import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav/navbar.component' ;
import { AppMainComponent } from './components/app-main.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutDayComponent } from './components/workout-day/workout-day.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ExerciseVariationComponent } from './components/exercise-variation/exercise-variation.component';
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
    ExerciseComponent,
    ExerciseVariationComponent
  ],
  providers: [WorkoutService, ToastrService, AudioService],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
