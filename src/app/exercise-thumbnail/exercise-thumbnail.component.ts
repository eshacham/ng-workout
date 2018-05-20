import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent {
    @Input() exerciseSet: any[]; // this is an array of exercises
    @Output() eventClick = new EventEmitter();
    // mode: any = 'edit';

    editExercise() {
        this.eventClick.emit({
            type: 'Edit',
            data: this.exerciseSet
        });
    }

    deleteExercise() {
        this.eventClick.emit({
            type: 'Delete',
            data: this.exerciseSet
        });
    }

    exerciseSelected(exercise) {
        console.log('Exercise Set Selected');
    }

    /// TODO: iterate thru the set!
    exerciseDetails(exercise): string {
        const details = [];

        if (exercise.grip && exercise.grip.type) {
            details.push(exercise.grip.type);
        }
        if (exercise.grip && exercise.grip.width) {
            details.push(exercise.grip.width);
        }
        if (exercise.weightType) {
            details.push(exercise.weightType);
        }
        return details.join(' | ');
    }
}
