import { ExerciseSet } from './ExerciseSet';
import { JsonProperty } from 'json-typescript-mapper';

export class Exercise {
    @JsonProperty('id')
    id: number;

    @JsonProperty({clazz: ExerciseSet, name: 'sets'})
    sets: ExerciseSet[];

    constructor () {
        this.id = undefined;
        this.sets = undefined;
    }
}
