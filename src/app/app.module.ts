import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppWorkoutComponent } from './app-workout.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppWorkoutComponent
  ],
  bootstrap: [AppWorkoutComponent]
})
export class AppModule { }
