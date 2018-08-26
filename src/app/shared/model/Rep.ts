import { WeightUnit } from '../enums';
import { JsonProperty } from 'json-typescript-mapper';

export class Rep {

    @JsonProperty('weight')
    weight: number;

    @JsonProperty('weightUnit')
    weightUnit: WeightUnit;

    @JsonProperty('times')
    times: number;

    @JsonProperty('seconds')
    seconds: number;

    constructor () {
        this.weight = undefined;
        this.weightUnit = undefined;
        this.times = undefined;
        this.seconds = undefined;
    }
}
