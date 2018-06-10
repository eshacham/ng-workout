import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WeightUnit } from '../workout/workout.component';
// import { setInterval } from 'timers';

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

    _timedRepLoopRemaining = 0;
    timedRepLoopinterval = null;
    get timedRepLoopRemaining(): number { return this._timedRepLoopRemaining; }

    _timedToRestAfterCurrentRep = 0;
    get timedToRestAfterCurrentRep(): number { return this._timedToRestAfterCurrentRep; }
    _timedRestLoopRemaining = 0;
    timedRestLoopinterval = null;
    get timedRestLoopRemaining(): number { return this._timedRestLoopRemaining; }


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
        }
        if (this._displayMode === DisplayMode.Workout) {
            this.startWorkout();
        } else {
            this.stopRepTimerLoop();
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

    isInTimerLoop(repIndex): boolean {
        return this.activeRepIndex === repIndex &&
        this._timedRepLoopRemaining > 0 && this.IsRunning ;
    }

    get isInRestLoop(): boolean {
        return this._timedRestLoopRemaining > 0 && this.IsRunning ;
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
        this.startTimedRep();
    }

    private startTimedRep() {
        this.stopRepTimerLoop();
        this._timedRepLoopRemaining = this.exerciseSet[0].reps[this.activeRepIndex].time;
        if (this._timedRepLoopRemaining) {
            this.timedRepLoopinterval = setInterval(() => {
                this._timedRepLoopRemaining --;
                if (this._timedRepLoopRemaining === 0) {
                    this.stopRepTimerLoop();
                    this.nextRep(false);
                }
            }, 1000);
        }
    }

    stopRepTimerLoop() {
        if (this.timedRepLoopinterval) {
            clearInterval(this.timedRepLoopinterval);
        }
    }

    private startTimedRest(action) {
        this.stopRestTimerLoop();
        this._timedRestLoopRemaining = this._timedToRestAfterCurrentRep;
        if (this._timedRestLoopRemaining) {
            this.timedRestLoopinterval = setInterval(() => {
                this._timedRestLoopRemaining --;
                if (this._timedRestLoopRemaining === 0) {
                    this.stopRestTimerLoop();
                    action();
                }
            }, 1000);
        }
    }

    stopRestTimerLoop() {
        if (this.timedRestLoopinterval) {
            clearInterval(this.timedRestLoopinterval);
        }
    }

    prevRep () {
        if (this.activeRepIndex > 0) {
            this.activeRepIndex--;
            this.startTimedRep();
         } else {
            this.stopRepTimerLoop();
            this.stopRestTimerLoop();
         }
    }

    nextRep (shouldRest) {
        if (this.exerciseSet[0].reps.length - 1 > this.activeRepIndex) {
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exerciseSet[0].restBetweenReps;
                this.startTimedRest(() => {
                    this.activeRepIndex++;
                    this.startTimedRep();
                });
            } else {
                this.activeRepIndex++;
            }
        } else {
            this.stopRepTimerLoop();
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exerciseSet[0].restAfterExercise;
                this.startTimedRest(() => this.completeExercise());
            } else {
                this.completeExercise();
            }
        }
    }

    completeExercise () {
        this.eventEmitter.emit({
            action: ExerciseAction.Completed,
            data: this.exerciseSetIndex
        });
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
