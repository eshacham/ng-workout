import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent {
    @Input() exercise: any;
    @Output() eventClick = new EventEmitter();
    //mode: any = 'edit';

    editExercise() {
        this.eventClick.emit({
            type: 'Edit',
            data: this.exercise
        });
    }

    deleteExercise() {
        this.eventClick.emit({
            type: 'Delete',
            data: this.exercise
        });
    }

    exerciseSelected() {
        console.log('Exercise Selected');
    }
}
