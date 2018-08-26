import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WorkoutService } from '../shared/workout.service';
import { ToastrService } from '../shared/toastr.service';
import { WorkoutDay } from '../shared/model/WorkoutDay';
import { Exercise } from '../shared/model/Exercise';
import { DisplayMode, ExerciseAction  } from '../shared/enums';
import { ExerciseSwitchModeEvent } from '../shared/model/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from '../shared/model/ExerciseActionEvent';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html',
    styleUrls: ['./workout-day.component.css']
})
export class WorkoutDayComponent implements OnInit, OnDestroy {
    constructor (private toastr: ToastrService,
                 private workoutService: WorkoutService) {}

    @Input() workoutDay: WorkoutDay;
    @Input() workoutComponentPublisher: Subject<ExerciseSwitchModeEvent>;

    @Output() eventEmitter = new EventEmitter<ExerciseActionEvent>();

    componentPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();
    runningExerciseIndex = 0;

    displayMode = DisplayMode;

    private _displayMode: DisplayMode = DisplayMode.Display;
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
            if (this._displayMode === DisplayMode.Workout) {
                if (this.runningExerciseIndex === 0) {
                    this.runningExerciseIndex = 1;
                }
            }
            this.publishWorkoutEvent(this._displayMode, this.runningExerciseIndex);
        }
    }

    ngOnInit() {
        this.workoutComponentPublisher.subscribe(event => this.handleWorkoutEventchange(event));
    }

    handleWorkoutEventchange(event: ExerciseSwitchModeEvent) {
        if (event.runningExerciseDayName !== this.workoutDay.name) {
            this.finishWorkout(false);
        }
    }

    ngOnDestroy() {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.workoutComponentPublisher.unsubscribe();
      }
    handleExerciseActionEvent(event: ExerciseActionEvent) {
        const exerciseAction: ExerciseAction = event.action;
        switch (exerciseAction) {
            case ExerciseAction.Completed:
                console.log('receieved completed event: ', event.exerciseIndex);
                this.handleExersiceSetComletion(event.exerciseIndex);
                break;
            case ExerciseAction.Delete:
                console.log('receieved delete event: ', event.exercise);
                this.deleteExercise(event.exercise, event.workoutDayName);
                break;
            case ExerciseAction.Edit:
                console.log('receieved edit event: ', event.exercise);
                break;
            case ExerciseAction.Run:
                console.log('receieved run event: ', event.exerciseIndex);
                this.startExercise(event.exerciseIndex);
                break;
        }
    }

    deleteExercise(set: Exercise, day: string) {
        this.workoutService.deleteExercise(set, day);
    }

    setEditMode() {
        this.DisplayMode = DisplayMode.Edit;
    }

    cancelEditEditMode() {
        this.DisplayMode = DisplayMode.Display;
        this.toastr.warning('Cancelled!');
    }
    addExercise() {
        const newExercise: Exercise = this.workoutService.getNewtWorkoutSet();
        this.workoutDay.exercises.push(newExercise);
        this.saveChanges() ;
    }
    saveChanges() {
        this.DisplayMode = DisplayMode.Display;
        this.toastr.info('Saved!');
    }

    startWorkout() {
        this.DisplayMode = DisplayMode.Workout;
        this.emitExerciseActionEvent(ExerciseAction.Run);
    }

    finishWorkout (notify: boolean = true) {
        this.DisplayMode = DisplayMode.Display;
        if (notify) {
            this.toastr.success('Good Job!');
        }
    }

    handleExersiceSetComletion(exerciseSetIndex: number) {
        if (this.workoutDay.exercises.length > exerciseSetIndex) {
            this.startExercise(exerciseSetIndex + 1);
        } else {
            this.finishWorkout();
        }
    }

    startExercise(exerciseIndex: number) {
        this.publishWorkoutEvent(DisplayMode.Workout, exerciseIndex);
    }

    publishWorkoutEvent(displayMode: DisplayMode,
        runningExerciseIndex: number)  {
        const workoutEvent =
            new ExerciseSwitchModeEvent (displayMode, runningExerciseIndex, this.workoutDay.name);
        this.componentPublisher.next(workoutEvent);
    }

    emitExerciseActionEvent(action: ExerciseAction) {
        this.eventEmitter.emit(new ExerciseActionEvent(
            action,
            null,
            null,
            this.workoutDay.name));
    }

}

