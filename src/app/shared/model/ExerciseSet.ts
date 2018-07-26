import { RepetitionSpeed, WeightType } from '../enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { JsonProperty } from 'json-typescript-mapper';

export class ExerciseSet {
    @JsonProperty('name')
    name: string;

    @JsonProperty('imageUrl')
    imageUrl: string;

    @JsonProperty('grip')
    theGrip: Grip;

    @JsonProperty('repetition')
    repSpeed: RepetitionSpeed;

    @JsonProperty('weightType')
    typeOfWeight: WeightType;

    @JsonProperty('isFavorite')
    isFavorite: Boolean;

    @JsonProperty({clazz: Rep, name: 'reps'})
    reps: Rep[];

    @JsonProperty('restBetweenReps')
    restBetweenReps: number;

    @JsonProperty('restAfterExercise')
    restAfterExercise: number;

    constructor () {
        this.name = undefined;
        this.imageUrl = undefined;
        this.theGrip = undefined;
        this.repSpeed = undefined;
        this.typeOfWeight = undefined;
        this.isFavorite = undefined;
        this.restBetweenReps = undefined;
        this.restAfterExercise = undefined;
        this.reps = undefined;
    }
}
