import { DisplayMode  } from '../enums';

export class ExerciseSwitchModeEvent {

   displayMode: DisplayMode;
   runningExerciseIndex: number;
   runningExerciseDayName: string;

   constructor(_displayMode: DisplayMode,
            _runningExerciseIndex: number,
            _runningExerciseDayName: string) {
                this.displayMode = _displayMode;
                this.runningExerciseIndex = _runningExerciseIndex;
                this.runningExerciseDayName = _runningExerciseDayName;
   }
}
