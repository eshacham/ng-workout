import { WorkoutDay } from './WorkoutDay';
import { JsonProperty } from 'json-typescript-mapper';

export class Workout {
    @JsonProperty('name')
    name: string;

    @JsonProperty({clazz: WorkoutDay, name: 'days'})
    days: WorkoutDay[];

    constructor() {
        this.name = void 0;
        this.days = void 0;
    }
}
