import { Component, Input, OnChanges } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { ExerciseSet } from '../shared/model/ExerciseSet';
import { GripType, GripWidth, WeightType } from '../shared/enums';

@Component({
    selector: 'app-exercise-variation',
    templateUrl: './exercise-variation.component.html',
    styleUrls: ['./exercise-variation.component.css']
})
export class ExerciseVariationComponent implements OnChanges {
    @Input() exerciseSet: ExerciseSet;
    @Input() isEditing: boolean;

    inEditMode: boolean;
    get InEditMode(): boolean {
        return this.inEditMode;
    }

    get exerciseDetails(): string {
        const details = [];

        if (this.exerciseSet.theGrip && this.exerciseSet.theGrip.typeOfGrip) {
            details.push(this.exerciseSet.theGrip.typeOfGrip);
        }
        if (this.exerciseSet.theGrip && this.exerciseSet.theGrip.width) {
            details.push(this.exerciseSet.theGrip.width);
        }
        if (this.exerciseSet.typeOfWeight) {
            details.push(this.exerciseSet.typeOfWeight);
        }
        return details.join(' | ');
    }

    weightTypes = Object.keys(WeightType);
    gripTypes = Object.keys(GripType);
    gripWidths = Object.keys(GripWidth);

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        const change = changes['isEditing'];
        if (change) {
            this.inEditMode = change.currentValue;
        }
    }
}
