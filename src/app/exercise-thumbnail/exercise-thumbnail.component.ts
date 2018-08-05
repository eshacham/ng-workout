import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WeightUnit, DisplayMode } from '../shared/enums';
import { Exercise } from '../shared/model/Exercise';
import { ExerciseSet } from '../shared/model/ExerciseSet';
import { Rep } from '../shared/model/Rep';
import { WorkoutEvent } from '../shared/model/WorkoutEvent';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy   {
    @Input() workoutDayName: string;
    @Input() exercise: Exercise;
    @Input() exerciseIndex: number;
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

    completedReps: boolean[] = [];

    ngOnInit() {
        this.parentSubject.subscribe(event => this.handleEventchange(event));
      }

    handleEventchange(event: WorkoutEvent) {
        this.IsRunning = (event.runningExerciseIndex === this.exerciseIndex);
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
            data: this.exercise
        });
    }

    runExercise() {
        this.eventEmitter.emit({
            action: ExerciseAction.Run,
            data: this.exerciseIndex
        });
    }

    deleteExercise() {
        this.eventEmitter.emit({
            action: ExerciseAction.Delete,
            data: { set: this.exercise,
                    day: this.workoutDayName
                }
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
        return this.exercise.sets.length > 1;
    }

    exerciseSelected() {
        console.log(`Exercise Selected ${this.exercise.sets[0].name}`);
    }

    exerciseDetails(exerciseSet: ExerciseSet): string {
        const details = [];

        if (exerciseSet.theGrip && exerciseSet.theGrip.typeOfGrip) {
            details.push(exerciseSet.theGrip.typeOfGrip);
        }
        if (exerciseSet.theGrip && exerciseSet.theGrip.width) {
            details.push(exerciseSet.theGrip.width);
        }
        if (exerciseSet.typeOfWeight) {
            details.push(exerciseSet.typeOfWeight);
        }
        return details.join(' | ');
    }

    isFirstInSet(exerciseSet: ExerciseSet): boolean {
        return this.hasSet && this.exercise.sets[0] === exerciseSet;
    }

    getTopBottomMarginClass(exerciseSet: ExerciseSet) {
        if (this.isFirstInSet(exerciseSet)) {
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
        const size = 12 / this.exercise.sets[0].reps.length;
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
        return (12 / this.exercise.sets.length);
    }

    startWorkout() {
        if (!this.IsRunning) {
            return;
        }
        this.activeRepIndex = 0;
        if (this.completedReps.length === 0) {
            this.exercise.sets[0].reps.forEach(element => {
                this.completedReps.push(false);
            });
        } else {
            this.completedReps.forEach((rep, i) => {
                this.completedReps[i] = false;
            });
        }
        this.startTimedRep();
    }

    private startTimedRep() {
        this.stopRepTimerLoop();
        this._timedRepLoopRemaining = this.exercise.sets[0].reps[this.activeRepIndex].seconds;
        if (this._timedRepLoopRemaining) {
            this.timedRepLoopinterval = setInterval(() => {
                this._timedRepLoopRemaining --;
                if (this._timedRepLoopRemaining <= 0) {
                    this.stopRepTimerLoop();
                    this.nextRep(true);
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
                if (this._timedRestLoopRemaining <= 0) {
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
            this.completedReps[this.activeRepIndex] = false;
            this.startTimedRep();
         } else {
            this.stopRepTimerLoop();
            this.stopRestTimerLoop();
         }
    }

    skipRest() {
        this._timedRestLoopRemaining = 0;
    }

    nextRep (shouldRest) {
        this.completedReps[this.activeRepIndex] = true;
        this.stopRepTimerLoop();
        this._timedRepLoopRemaining = 0;
        if (this.exercise.sets[0].reps.length - 1 > this.activeRepIndex) {
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exercise.sets[0].restBetweenReps;
                this.startTimedRest(() => {
                    this.activeRepIndex++;
                    this.startTimedRep();
                });
            } else {
                this._timedRestLoopRemaining = 0;
                this.activeRepIndex++;
                this.startTimedRep();
            }
        } else {
            this.stopRepTimerLoop();
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exercise.sets[0].restAfterExercise;
                this.startTimedRest(() => this.completeExercise());
            } else {
                this.completeExercise();
            }
        }
    }

    completeExercise () {
        this.eventEmitter.emit({
            action: ExerciseAction.Completed,
            data: this.exerciseIndex
        });
    }

    isRepCompleted (i) {
        return this.completedReps[i];
    }
}


export enum ExerciseAction {
    Completed,
    Delete,
    Selected,
    Edit,
    Run
}
