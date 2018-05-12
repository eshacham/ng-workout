import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html'
})
export class WorkoutDayComponent {
    @Input() workoutDay: any;

    handleExerciseClick(data) {
        console.log('receieved: ', data);
    }
}

