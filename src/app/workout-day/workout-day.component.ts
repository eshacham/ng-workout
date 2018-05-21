import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ExerciseThumbnailComponent } from '../exercise-thumbnail/exercise-thumbnail.component';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html',
})
export class WorkoutDayComponent {
    @Input() workoutDay: any;
    parentSubject: Subject<any> = new Subject();

    private _isEditMode = false;
    get isEditMode(): boolean {
        return this._isEditMode;
    }
    set isEditMode(val: boolean) {
        if (this._isEditMode !== val) {
            this._isEditMode = val;
        }
    }

    private _editTogglerText = 'Edit';
    get editTogglerText(): string {
        return this._editTogglerText;
    }

    handleExerciseClick(data) {
        console.log('receieved: ', data);
    }

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
        this._editTogglerText = this.isEditMode ? 'Exit Edit' : 'Edit';
        this.parentSubject.next({isEdit: this.isEditMode});
    }

}

