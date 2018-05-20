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
    exerciseDetails(): string {
        const details = [];

        if (this.exerciseSet[0].grip && this.exerciseSet[0].grip.type) {
            details.push(this.exerciseSet[0].grip.type);
        }
        if (this.exerciseSet[0].grip && this.exerciseSet[0].grip.width) {
            details.push(this.exerciseSet[0].grip.width);
        }
        if (this.exerciseSet[0].weightType) {
            details.push(this.exerciseSet[0].weightType);
        }
        return details.join(' | ');
    }
}
