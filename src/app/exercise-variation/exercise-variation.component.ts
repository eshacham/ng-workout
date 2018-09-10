import { Component, Input, Output } from '@angular/core';
import { ExerciseSet } from '../shared/model/ExerciseSet';

@Component({
    selector: 'app-exercise-variation',
    templateUrl: './exercise-variation.component.html',
    styleUrls: ['./exercise-variation.component.css']
})
export class ExerciseVariationComponent {
    @Input() exerciseSet: ExerciseSet;

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



}
