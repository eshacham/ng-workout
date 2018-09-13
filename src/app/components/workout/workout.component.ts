import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../shared/workout.service';
import { Workout } from '../../shared/model/Workout';
import { ExerciseActionEvent } from '../../shared/model/ExerciseActionEvent';
import { ExerciseAction, DisplayMode } from '../../shared/enums';
import { Subject } from 'rxjs/Subject';
import { ExerciseSwitchModeEvent } from '../../shared/model/ExerciseSwitchModeEvent';

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls:  ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    workout: Workout;
    constructor (private workoutService: WorkoutService) {
    }

    componentPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();

    ngOnInit() {
        this.workout = this.workoutService.getWorkout();
    }

    handleExerciseActionEvent(event: ExerciseActionEvent) {
        const exerciseAction: ExerciseAction = event.action;
        switch (exerciseAction) {
            case ExerciseAction.Completed:
                console.log('workout: receieved completed event: ', event.exerciseIndex);
                // this.handleExersiceSetComletion(event.exerciseIndex);
                break;
            case ExerciseAction.Delete:
                console.log('workout: receieved delete event: ', event.exercise);
                // this.deleteExercise(event.exercise, event.workoutDayName);
                break;
            case ExerciseAction.Edit:
                console.log('workout: receieved edit event: ', event.exercise);
                break;
            case ExerciseAction.Run:
                console.log('workout: receieved run event: ', event.workoutDayName);
                this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
                break;
        }
    }

    publishWorkoutEvent(displayMode: DisplayMode,
        runningExerciseDayName: string)  {
        const workoutEvent =
            new ExerciseSwitchModeEvent (displayMode, null, runningExerciseDayName);
        this.componentPublisher.next(workoutEvent);
    }
}
