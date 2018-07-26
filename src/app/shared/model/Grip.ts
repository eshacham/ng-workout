import { GripWidth, GripType } from '../enums';
import { JsonProperty } from 'json-typescript-mapper';

export class Grip {
    @JsonProperty('type')
    typeOfGrip: GripType;

    @JsonProperty('width')
    width: GripWidth;

    constructor() {
        this.typeOfGrip = undefined;
        this.width = undefined;
    }
}
