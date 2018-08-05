import { DisplayMode  } from '../enums';

export class WorkoutEvent {

   displayMode: DisplayMode;
   runningExerciseIndex: number;

   constructor(_displayMode: DisplayMode,
            _runningExerciseIndex: number) {
                this.displayMode = _displayMode;
                this.runningExerciseIndex = _runningExerciseIndex;
   }
}
