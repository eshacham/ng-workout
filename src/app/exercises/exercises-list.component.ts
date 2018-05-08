import { Component } from '@angular/core';

@Component({
    selector: 'app-exercises-list',
    templateUrl: './exercises-list.component.html'
})
export class ExercisesListComponent {
    exercise = {
        id: 1,
        name: 'Bench Press, Wide Grip',
        imageUrl: 'assets/images/CrossPressWideGrip.jpeg',
        grip: {
            type: 'Overhand',
            width: 'Wide',
        },
        repetition: {
            speed: '1:1'
        },
        weightType: 'Barbell',
        isFavorite: false,
        sets: [
            {
                weight: 95,
                unit: 'lbs',
                times: 12
            },
            {
                weight: 95,
                unit: 'lbs',
                times: 12
            },
            {
                weight: 95,
                unit: 'lbs',
                times: 12
            },
            {
                weight: 95,
                unit: 'lbs',
                times: 12
            }
        ],
        restBetweenSets: 20,
        restAfterExercise: 20
    };
}
