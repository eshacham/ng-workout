import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html'
})
export class ExerciseThumbnailComponent {
    @Input() exercise: any;
    @Output() eventClick = new EventEmitter();

    editExercise() {
        //console.log('Edit Exercise');
        this.eventClick.emit({
            type: 'Edit',
            data: this.exercise
        });
    }

    deleteExercise() {
        //console.log('Delete Exercise');
        this.eventClick.emit({
            type: 'Delete',
            data: this.exercise
        });
    }
}
