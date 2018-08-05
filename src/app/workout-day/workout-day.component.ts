import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ExerciseThumbnailComponent, ExerciseAction } from '../exercise-thumbnail/exercise-thumbnail.component';
import { ToastrService } from '../shared/toastr.service';
import { WorkoutService } from '../shared/workout.service';
import { WorkoutDay } from '../shared/model/WorkoutDay';
import { Exercise } from '../shared/model/Exercise';
import { DisplayMode  } from '../shared/enums';
import { WorkoutEvent } from '../shared/model/WorkoutEvent';


@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.component.html',
    styleUrls: ['./workout-day.component.css']
})
export class WorkoutDayComponent {
    constructor(private toastr: ToastrService,
    private workoutService: WorkoutService) { }
    @Input() workoutDay: WorkoutDay;
    parentSubject: Subject<any> = new Subject();
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
    }

    finishWorkout() {
        this.DisplayMode = DisplayMode.Display;
        this.toastr.success('Good Job!');
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

    publishWorkoutEvent(displayMode: DisplayMode, runningExerciseIndex: number)  {
        const workoutEvent =  new WorkoutEvent (displayMode, runningExerciseIndex);
        this.parentSubject.next(workoutEvent);
    }

}

