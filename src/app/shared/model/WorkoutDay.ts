import { Exercise } from './Exercise';
import { JsonProperty } from 'json-typescript-mapper';

export class WorkoutDay {
    @JsonProperty('id')
    id: number;

    @JsonProperty('name')
    name: string;

    @JsonProperty({clazz: Exercise, name: 'exercises'})
    exercises: Exercise[];

    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.exercises = undefined;
    }
}
