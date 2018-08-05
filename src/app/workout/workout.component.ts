import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/workout.service';
import { Workout } from '../shared/model/Workout';

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls:  ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    workout: Workout;
    constructor (private workoutService: WorkoutService) {
    }

    ngOnInit() {
        this.workout = this.workoutService.getWorkout();
    }
}
