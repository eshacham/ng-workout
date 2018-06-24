import { Component } from '@angular/core';
import { WorkoutService } from '../shared/workout.service';

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls:  ['./workout.component.css']
})
export class WorkoutComponent {
    workout;
    constructor (private workoutService: WorkoutService) {
        this.workout = workoutService.getWorkout();
    }
}


