import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ExerciseThumbnailComponent, DisplayMode } from '../exercise-thumbnail/exercise-thumbnail.component';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html',
    styleUrls: ['./workout-day.component.css']
})
export class WorkoutDayComponent {
    @Input() workoutDay: any;
    parentSubject: Subject<any> = new Subject();

    displayMode = DisplayMode;
    private _displayMode: DisplayMode = DisplayMode.Display;
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
            this.publishDisplayMode();
        }
    }

    handleExerciseClick(data) {
        console.log('receieved: ', data);
    }

    setEditMode() {
        this.DisplayMode = DisplayMode.Edit;
    }

    cancelEditEditMode() {
        this.DisplayMode = DisplayMode.Display;
    }

    saveChanges() {
        this.DisplayMode = DisplayMode.Display;
    }

    startWorkout() {
        this.DisplayMode = DisplayMode.Workout;
    }

    finishWorkout() {
        this.DisplayMode = DisplayMode.Display;
    }


    publishDisplayMode() {
        this.parentSubject.next({
            displayMode: this._displayMode
        });
    }

}

