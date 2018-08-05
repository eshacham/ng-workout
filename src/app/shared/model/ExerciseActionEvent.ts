import { ExerciseAction } from '../enums';
import { Exercise } from './Exercise';

export class ExerciseActionEvent {

    action: ExerciseAction;
    exercise: Exercise;
    exerciseIndex: number;
    workoutDayName: string;

   constructor (
        _exerciseAction: ExerciseAction,
        _exercise: Exercise,
        _exerciseIndex: number,
        _workoutDayName: string) {
        this.action = _exerciseAction;
        this.exercise = _exercise;
        this.exerciseIndex = _exerciseIndex;
        this.workoutDayName = _workoutDayName;
   }
}
