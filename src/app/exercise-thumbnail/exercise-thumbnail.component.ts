import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.css']
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy   {
    @Input() exerciseSet: any[]; // this is an array of exercises
    @Output() eventClick = new EventEmitter();
    @Input() parentSubject: Subject<any>;

    displayMode = DisplayMode;
    private _displayMode: DisplayMode = DisplayMode.Display;
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
        }
    }
    get isEditMode(): boolean {
        return this._displayMode === DisplayMode.Edit;
    }
    ngOnInit() {
        this.parentSubject.subscribe(event => {
          this.DisplayMode = event.displayMode;
        });
      }

    ngOnDestroy() {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.parentSubject.unsubscribe();
      }


    editExercise() {
        this.eventClick.emit({
            action: 'Edit',
            data: this.exerciseSet
        });
    }

    deleteExercise() {
        this.eventClick.emit({
            action: 'Delete',
            data: this.exerciseSet
        });
    }

    get hasSet(): boolean {
        return this.exerciseSet.length > 1;
    }

    exerciseSelected(exercise) {
        console.log('Exercise Set Selected');
    }

    exerciseDetails(exercise): string {
        const details = [];

        if (exercise.grip && exercise.grip.type) {
            details.push(exercise.grip.type);
        }
        if (exercise.grip && exercise.grip.width) {
            details.push(exercise.grip.width);
        }
        if (exercise.weightType) {
            details.push(exercise.weightType);
        }
        return details.join(' | ');
    }

    isFirstInSet(exercise): boolean {
        return this.hasSet && this.exerciseSet[0] === exercise;
    }

    getTopBottomMarginClass(exercise) {
        if (this.isFirstInSet(exercise)) {
            return ['noBottomMargin'];
        } else {
            return ['noTopMargin'];
        }
    }
}

export enum DisplayMode {
    Display,
    Edit,
    Workout
}
