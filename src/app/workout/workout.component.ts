import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/workout.service';

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls:  ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    workout;
    constructor (private workoutService: WorkoutService) {
        this.workout = workoutService.getWorkout();
    }

    ngOnInit() {
        this.workout = this.workoutService.getWorkout();
    }
}
