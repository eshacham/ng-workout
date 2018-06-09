import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WeightUnit } from '../workout/workout.component';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy   {
    @Input() exerciseSet: any[]; // this is an array of exercises
    @Input() exerciseSetIndex: number;
    @Input() parentSubject: Subject<any>;
    @Output() eventEmitter = new EventEmitter();

    activeRepIndex = 0;

    displayMode = DisplayMode;
    weightUnit = WeightUnit;

    private _isRunning = false;
    get IsRunning(): boolean { return this._isRunning; }
    set IsRunning (val: boolean) {
        this._isRunning = val;
    }

    private _displayMode: DisplayMode = DisplayMode.Display;
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
            if (this._displayMode === DisplayMode.Workout) {
                this.startWorkout();
            }
        }
    }
    get isEditMode(): boolean {
        return this._displayMode === DisplayMode.Edit;
    }
    ngOnInit() {
        this.parentSubject.subscribe(event => this.handleEventchange(event));
      }

    handleEventchange(event) {
        this.IsRunning = (event.runningExerciseSetIndex === this.exerciseSetIndex);
        this.DisplayMode = event.displayMode;
    }

    ngOnDestroy() {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.parentSubject.unsubscribe();
      }

    editExercise() {
        this.eventEmitter.emit({
            action: ExerciseAction.Edit,
            data: this.exerciseSet
        });
    }

    runExercise() {
        this.eventEmitter.emit({
            action: ExerciseAction.Run,
            data: this.exerciseSetIndex
        });
    }

    deleteExercise() {
        this.eventEmitter.emit({
            action: ExerciseAction.Delete,
            data: this.exerciseSet
        });
    }

    get hasSet(): boolean {
        return this.exerciseSet.length > 1;
    }

    exerciseSelected(exercise) {
        console.log('Exercise Set Selected');
    }

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

    isFirstInSet(exercise): boolean {
        return this.hasSet && this.exerciseSet[0] === exercise;
    }

    getTopBottomMarginClass(exercise) {
        if (this.isFirstInSet(exercise)) {
            return ['noBottomMargin'];
        } else {
            return ['noTopMargin'];
        }
    }

    getRunningExerciseSetCellClass() {
        let returnClass = 'col-sm-';
        const size = this.getCellSizeFromExerciseSet();
        returnClass += size.toString();
        return [returnClass];
    }

    getRunningExerciseSetRepCellClass(repIndex) {
        const classes = [];
        let returnClass = 'col-sm-';
        const size = 12 / this.exerciseSet[0].reps.length;
        returnClass += size.toString();
        classes.push(returnClass);
        if (this.activeRepIndex === repIndex) {
            classes.push('activeRep', 'fadeOutAndIn');
        } else {
            classes.push('nonActiveRep');
        }
        return classes;
    }

    getCellSizeFromExerciseSet() {
        return (12 / this.exerciseSet.length);
    }

    startWorkout() {
        if (!this.IsRunning) {
            return;
        }
        this.activeRepIndex = 0;
    }

    doneRep () {
        this.nextRep();
    }
    prevRep () {
        if (this.activeRepIndex > 0) {
            this.activeRepIndex--;
         }
    }
    nextRep () {
        if (this.exerciseSet[0].reps.length - 1 > this.activeRepIndex) {
            this.activeRepIndex++;
         } else {
             this.eventEmitter.emit({
                action: ExerciseAction.Completed,
                data: this.exerciseSetIndex
            });
         }
    }
}

export enum DisplayMode {
    Display,
    Edit,
    Workout
}

export enum ExerciseAction {
    Completed,
    Delete,
    Selected,
    Edit,
    Run
}
