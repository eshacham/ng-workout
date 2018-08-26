import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AudioService } from '../shared/audio.service';
import { WeightUnit, DisplayMode, ExerciseAction } from '../shared/enums';
import { Exercise } from '../shared/model/Exercise';
import { ExerciseSet } from '../shared/model/ExerciseSet';
import { Rep } from '../shared/model/Rep';
import { ExerciseSwitchModeEvent } from '../shared/model/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from '../shared/model/ExerciseActionEvent';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy {
    constructor (private audioService: AudioService) {}

    @Input() workoutDayName: string;
    @Input() exercise: Exercise;
    @Input() exerciseIndex: number;
    @Input() workoutDayComponentPublisher: Subject<ExerciseSwitchModeEvent>;

    @Output() eventEmitter = new EventEmitter<ExerciseActionEvent>();

    activeRepIndex = 0;
    get isPrevRepAvailable(): boolean {
        return this.activeRepIndex > 0 ||
        this.timedRepRemaining > 0 ||
        this.timedRestRemaining > 0;
    }

    _timedRepRemaining = 0;
    timedRepTimer = null;
    get timedRepRemaining(): number { return this._timedRepRemaining; }

    _timedToRestAfterCurrentRep = 0;
    get timedToRestAfterCurrentRep(): number { return this._timedToRestAfterCurrentRep; }
    _timedRestRemaining = 0;
    timedRestTimer = null;
    get timedRestRemaining(): number { return this._timedRestRemaining; }

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
        if (this._displayMode === DisplayMode.Workout && this.IsRunning) {
            this.startWorkout();
        } else {
            this.stopRepTimer();
            this.stopRestTimer();
        }
    }
    get isEditMode(): boolean {
        return this._displayMode === DisplayMode.Edit;
    }

    private _isFrozen: boolean;
    get IsFrozen(): boolean { return this._isFrozen; }
    set IsFrozen(val: boolean) {this._isFrozen = val; }

    completedReps: number[] = [];

    ngOnInit() {
        this.workoutDayComponentPublisher.subscribe(event => this.handleWorkoutEventchange(event));
      }

    handleWorkoutEventchange(event: ExerciseSwitchModeEvent) {
        this.IsRunning =
            (event.runningExerciseIndex === this.exerciseIndex &&
            event.runningExerciseDayName === this.workoutDayName);
        this.DisplayMode = event.displayMode;
    }

    ngOnDestroy() {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.workoutDayComponentPublisher.unsubscribe();
      }

    editExercise() {
        this.emitExerciseActionEvent(ExerciseAction.Edit);
    }

    runExercise() {
        this.emitExerciseActionEvent(ExerciseAction.Run);
    }

    deleteExercise() {
        this.emitExerciseActionEvent(ExerciseAction.Delete);
    }

    completeExercise () {
        this.emitExerciseActionEvent(ExerciseAction.Completed);
    }

    emitExerciseActionEvent(action: ExerciseAction) {
        this.eventEmitter.emit(new ExerciseActionEvent(
            action,
            this.exercise,
            this.exerciseIndex,
            this.workoutDayName));
    }

    isTimedRepRemaining(repIndex): boolean {
        return this.activeRepIndex === repIndex &&
                this._timedRepRemaining > 0 && this.IsRunning ;
    }

    get isResting(): boolean {
        return this._timedRestRemaining > 0 && this.IsRunning ;
    }

    get hasSet(): boolean {
        return this.exercise.sets.length > 1;
    }

    exerciseSelected() {
        if (this.DisplayMode === DisplayMode.Workout) {
            if (!this.IsRunning && !this.IsFrozen) {
                console.log(`Display Exercise ${this.exercise.sets[0].name} and freezing`);
                this.IsFrozen = true;
            } else {
               console.log(`Collapse Exercise ${this.exercise.sets[0].name} and unfreezing`);
                this.IsFrozen = false;
            }
        }
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
        const classes = this.getExerciseSetRepCellClass();
        if (this.activeRepIndex === repIndex) {
            classes.push('activeRep', 'fadeOutAndIn');
        } else {
            classes.push('nonActiveRep');
        }
        return classes;
    }

    private getExerciseSetRepCellClass() {
        const classes = [];
        let returnClass = 'col-sm-';
        const size = 12 / this.exercise.sets[0].reps.length;
        returnClass += size.toString();
        classes.push(returnClass);
        return classes;
    }

    getFrozenExerciseSetRepCellClass() {
        const classes = this.getExerciseSetRepCellClass();
        classes.push('nonActiveRep');
        return classes;
    }


    getCellSizeFromExerciseSet() {
        return (12 / this.exercise.sets.length);
    }

    startWorkout() {
        this.IsFrozen = false;
        this.resetCompletedReps();
        this.startTimedRep();
    }

    private resetCompletedReps() {
        this.completedReps.length = 0;
        this.activeRepIndex = 0;
    }

    private startTimedRep() {
        this.audioService.playStartWorkout();
        this.stopRepTimer();
        this._timedRepRemaining = this.exercise.sets[0].reps[this.activeRepIndex].seconds;
        if (this._timedRepRemaining) {
            this.timedRepTimer = setInterval(() => {
                this._timedRepRemaining --;
                if (this._timedRepRemaining <= 0) {
                    this.stopRepTimer();
                    this.nextRep(true);
                }
            }, 1000);
        }
    }

    private stopRepTimer() {
        if (this.timedRepTimer) {
            clearInterval(this.timedRepTimer);
        }
    }

    private startTimedRest(callbackAction) {
        this.audioService.playStartWorkout();
        this.stopRestTimer();
        this._timedRestRemaining = this._timedToRestAfterCurrentRep;
        if (this._timedRestRemaining) {
            this.timedRestTimer = setInterval(() => {
                this._timedRestRemaining --;
                if (this._timedRestRemaining <= 0) {
                    this.stopRestTimer();
                    callbackAction();
                }
            }, 1000);
        }
    }

    private stopRestTimer() {
        if (this.timedRestTimer) {
            clearInterval(this.timedRestTimer);
        }
    }

    prevRep () {
        if (this.activeRepIndex > 0) {
            this.completedReps.pop();
            this.activeRepIndex--;
        }
        this.stopRepTimer();
        this.stopRestTimer();
        this.startTimedRep();
    }

    skipRest() {
        this._timedRestRemaining = 0;
    }

    private activateNextRep() {
        this.activeRepIndex++;
        this.startTimedRep();
    }

    nextRep (shouldRest) {
        if (!this.isRepCompleted (this.activeRepIndex)) {
            this.completedReps.push(this.activeRepIndex);
        }
        this.stopRepTimer();
        this._timedRepRemaining = 0;
        if (this.exercise.sets[0].reps.length - 1 > this.activeRepIndex) {
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exercise.sets[0].restBetweenReps;
                this.startTimedRest(() => this.activateNextRep());
            } else {
                this.skipRest();
                this.activateNextRep();
            }
        } else {
            this.stopRepTimer();
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.exercise.sets[0].restAfterExercise;
                this.startTimedRest(() => this.completeExercise());
            } else {
                this.completeExercise();
            }
        }
    }

    isRepCompleted (i) {
        return this.completedReps.includes(i);
    }
}

