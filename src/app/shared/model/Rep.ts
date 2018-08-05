import { WeightUnit } from '../enums';
import { JsonProperty } from 'json-typescript-mapper';

export class Rep {
    @JsonProperty('Weight')
    weight: number;

    @JsonProperty('WeightUnit')
    theWeightUnit: WeightUnit;

    @JsonProperty('times')
    times: number;

    @JsonProperty('seconds')
    seconds: number;

    constructor () {
        this.weight = undefined;
        this.theWeightUnit = undefined;
        this.times = undefined;
        this.seconds = undefined;
    }
}
