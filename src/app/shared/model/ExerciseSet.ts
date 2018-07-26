import { RepetitionSpeed, WeightType } from '../enums';
import { Grip } from './Grip';
import { Rep } from './Rep';

export class ExerciseSet {
    constructor (
        Name: string,
        ImageUrl: string,
        TheGrip: Grip,
        RepSpeed: RepetitionSpeed,
        TypeOfWeight: WeightType,
        IsFavorite: Boolean,
        Reps: Rep[],
        RestBetweenReps: number,
        RestAfterExercise: number
    ) {}
}
