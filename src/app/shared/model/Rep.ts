import { WeightUnit } from '../enums';
import { JsonProperty } from 'json-typescript-mapper';

export class Rep {

    @JsonProperty('weight')
    weight: number;

    get HasWeight() {
        return this.weight || this.weight === 0;
    }
    set HasWeight(value) {
        this.weight = value ? 0 : null;
    }

    @JsonProperty('weightUnit')
    weightUnit: WeightUnit;

    @JsonProperty('times')
    times: number;

    get HasTimes() {
        return this.times || this.times === 0;
    }
    set HasTimes(value) {
        this.times = value ? 0 : null;
    }

    @JsonProperty('seconds')
    seconds: number;

    get HasSeconds() {
        return this.seconds || this.seconds === 0;
    }
    set HasSeconds(value) {
        this.seconds = value ? 0 : null;
    }

    constructor () {
        this.weight = undefined;
        this.weightUnit = undefined;
        this.times = undefined;
        this.seconds = undefined;
    }
}
