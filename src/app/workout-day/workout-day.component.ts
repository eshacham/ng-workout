import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ExerciseThumbnailComponent, DisplayMode, ExerciseAction } from '../exercise-thumbnail/exercise-thumbnail.component';
import { WorkoutService } from '../shared/workout.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html',
    styleUrls: ['./workout-day.component.css']
})
export class WorkoutDayComponent {
    constructor(private toastr: ToastrService,
    private workoutService: WorkoutService) { }
    constructor(private toastr: ToastrService) { }
    @Input() workoutDay: any;
    parentSubject: Subject<any> = new Subject();
    runningExerciseSetIndex = 0;

    displayMode = DisplayMode;

    private _displayMode: DisplayMode = DisplayMode.Display;
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
            if (this._displayMode === DisplayMode.Workout) {
                if (this.runningExerciseSetIndex === 0) {
                    this.runningExerciseSetIndex = 1;
                }
            }
            this.publishDisplayMode();
        }
    }

    handleExerciseEvents(event) {
        const exerciseAction: ExerciseAction = event.action;
        switch (exerciseAction) {
            case ExerciseAction.Completed:
                console.log('receieved completed event: ', event.data);
                this.handleExersiceSetComletion(event.data);
                break;
            case ExerciseAction.Delete:
                this.deleteExercise(event.data.set, event.data.day);
                console.log('receieved delete event: ', event.data);
                break;
            case ExerciseAction.Selected:
                console.log('receieved selected event: ', event.data);
                break;
                case ExerciseAction.Edit:
                console.log('receieved edit event: ', event.data);
                break;
            case ExerciseAction.Run:
                console.log('receieved run event: ', event.data);
                this.startExercise(event.data);
                break;
        }
    }

    deleteExercise(set, day) {
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
        const newExercise = this.workoutService.geNewtWorkoutSet();
        this.workoutDay.exercises.push(newExercise);
        this.saveChanges() ;
    }
    saveChanges() {
        this.DisplayMode = DisplayMode.Display;
        this.toastr.info('Saved!');
    }

    startWorkout() {
        this.DisplayMode = DisplayMode.Workout;
    }

    finishWorkout() {
        this.DisplayMode = DisplayMode.Display;
        this.toastr.success('Good Job!');
    }

    publishDisplayMode() {
        const event: any = {
            displayMode: this._displayMode,
            runningExerciseSetIndex: this.runningExerciseSetIndex
        };
        this.parentSubject.next(event);
    }
    handleExersiceSetComletion(exerciseSetIndex) {
        if (this.workoutDay.exercises.length > exerciseSetIndex) {
            this.startExercise(exerciseSetIndex + 1);
        } else {
            this.finishWorkout();
        }
    }

    startExercise(exerciseIndex) {
        const event: any = {
            displayMode: DisplayMode.Workout,
            runningExerciseSetIndex: exerciseIndex
        };
        this.parentSubject.next(event);
    }

}

