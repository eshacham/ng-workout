import { Component } from '@angular/core';

@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html',
    styleUrls:  ['./workout.component.css']
})
export class WorkoutComponent {
    workout = {
        name: 'ABC + Full Body Option 1 *',
        days: [{
            id: 4,
            name: 'Full Body',
            exercises: [{
                set: [{
                    id: 1,
                    name: 'Bench Press, Wide Grip',
                    imageUrl: 'assets/images/CrossPressWideGrip.jpeg',
                    grip: {
                        type: GripType.Overhand,
                        width: GripWidth.Wide,
                    },
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.Barbell,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 2,
                    name: 'Seated Rope Cable Row',
                    imageUrl: 'assets/images/SeatedRopeCableRow.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 3,
                    name: 'Dumbbell Wrist Curl',
                    imageUrl: 'assets/images/DumbbellWristCurl.png',
                    grip: {
                        type: GripType.Overhand,
                        width: GripWidth.Normal,
                    },
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.Dumbbell,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 15
                        },
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 15
                        },
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 15
                        },
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 4,
                    name: 'Cable Triceps Pushdown, Overhand Grip',
                    imageUrl: 'assets/images/CableTricepsPushdownOverheadGrip.png',
                    grip: {
                        type: GripType.Overhand,
                    },
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 5,
                    name: 'Cable Biceps Curl, Underhand Grip',
                    imageUrl: 'assets/images/CableBicepsCurlUnderhandGrip.png',
                    grip: {
                        type: GripType.Underhand,
                    },
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                 }]}, {
                set: [{
                    id: 6,
                    name: 'Leg Raise Machine',
                    imageUrl: 'assets/images/LegRaiseMachine.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 80,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 80,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 80,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 80,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 7,
                    name: 'Cable Leg Curl',
                    imageUrl: 'assets/images/CableLegCurl.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 60,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 60,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 60,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 60,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 8,
                    name: 'Crossfit Situps',
                    imageUrl: 'assets/images/CrossfitSitup.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 9,
                    name: 'Cross Body Crunch',
                    imageUrl: 'assets/images/CrossBodyCrunch.png',
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.NoWeight,
                    isFavorite: false,
                    reps: [
                        {
                            times: 15
                        },
                        {
                            times: 15
                        },
                        {
                            times: 15
                        },
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                 }]}],
            }, {
            id: 2,
            name: 'Upper Body 1',
            exercises: [{
                set: [{
                        id: 1,
                        name: 'Bench Press, Narrow Grip',
                        imageUrl: 'assets/images/BenchPressNarrowGrip.png',
                        grip: {
                            type: GripType.Overhand,
                            width: GripWidth.Narrow,
                        },
                        repetitionSpeed: RepetitionSpeed.OneOne,
                        weightType: WeightType.Barbell,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }, {
                        id: 2,
                        name: 'Dumbbell Bench Press, Rotating Grip',
                        imageUrl: 'assets/images/DumbbellBenshPressRotatingGrip.png',
                        grip: {
                            type: GripType.Neutral,
                            width: GripWidth.Normal,
                        },
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        weightType: WeightType.Dumbbell,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 85,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 3,
                        name: 'Cable Fly',
                        imageUrl: 'assets/images/CableFly.png',
                        grip: {
                            type: GripType.Underhand,
                        },
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 60,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 60,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 60,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 60,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            }
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 4,
                        name: 'Dumbbell Fly',
                        imageUrl: 'assets/images/DumbbellFly.png',
                        grip: {
                            type: GripType.Neutral,
                        },
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        weightType: WeightType.Dumbbell,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 5,
                        name: 'Dumbbell Horizontal Row, Inclined Prone',
                        imageUrl: 'assets/images/DumbbellHorizontalRowInclineProne.png',
                        grip: {
                            type: GripType.Overhand,
                        },
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        weightType: WeightType.Dumbbell,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 10,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 10,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 10,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 6,
                        name: 'Dumbbell Tricpes Extensions, Seated',
                        imageUrl: 'assets/images/DumbbellTricepsExtensionSeated.png',
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        weightType: WeightType.Dumbbell,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 25,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 25,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 25,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 7,
                        name: 'Inclined Pushup, Narrow Grip',
                        imageUrl: 'assets/images/InclinePushupNarrowGrip.jpg',
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        gripWidth: GripWidth.Narrow,
                        isFavorite: false,
                        reps: [
                            {
                                times: 10
                            },
                            {
                                times: 10
                            },
                            {
                                times: 10
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 8,
                        name: 'Reverse Cable Fly, On Flat Bench',
                        imageUrl: 'assets/images/ReverseCableFlyOnFlatBench.png',
                        grip: {
                            type: GripType.Overhand,
                        },
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 55,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 55,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 55,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 9,
                        name: 'Situps',
                        imageUrl: 'assets/images/Situps.png',
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        isFavorite: false,
                        reps: [
                            {
                                times: 12
                            },
                            {
                                times: 12
                            },
                            {
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 10,
                        name: 'Situps with Weight Above Head',
                        imageUrl: 'assets/images/SitupsWithWeightAboveHead.png',
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        isFavorite: false,
                        reps: [
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                            {
                                weight: 15,
                                WeightUnit: WeightUnit.Lbs,
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]}, {
                set: [{
                        id: 11,
                        name: 'Russian Twist',
                        imageUrl: 'assets/images/RussianTwist.png',
                        repetitionSpeed:  RepetitionSpeed.OneOne,
                        isFavorite: false,
                        reps: [
                            {
                                times: 12
                            },
                            {
                                times: 12
                            },
                            {
                                times: 12
                            },
                        ],
                        restBetweenSets: 20,
                        restAfterExercise: 20
                    }]
                }],
            }, {
            id: 3,
            name: 'Upper Body 2',
            exercises: [{
                set: [{
                    id: 1,
                    name: 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                    imageUrl: 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
                    grip: {
                        type: GripType.Overhand,
                        width: GripWidth.Wide,
                    },
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 90,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 90,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 90,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 90,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }, {
                    id: 2,
                    name: 'Decline Dumbbell Pullover',
                    imageUrl: 'assets/images/DeclineDumbbellPullover.png',
                    grip: {
                        type: GripType.Overhand,
                        width: GripWidth.Wide,
                    },
                    weightType: WeightType.Dumbbell,
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 3,
                    name: 'Dumbbell Arm Circles',
                    imageUrl: 'assets/images/DumbbellArmCircles.png',
                    grip: {
                        type: GripType.Overhand,
                    },
                    weightType: WeightType.Dumbbell,
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 10,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 10,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 10,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 4,
                    name: 'Machine Row Medium Grip',
                    imageUrl: 'assets/images/MachineRowMediumGrip.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 85,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 85,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 85,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 5,
                    name: 'Dummbell Biceps Curl Standing Underhand Grip',
                    imageUrl: 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                    grip: {
                        type: GripType.Underhand,
                    },
                    weightType: WeightType.Dumbbell,
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 15,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 6,
                    name: 'Cable Shrug',
                    imageUrl: 'assets/images/CableShrug.png',
                    grip: {
                        width: GripWidth.Normal,
                    },
                    weightType: WeightType.Dumbbell,
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 95,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 6,
                    name: 'Dragon Flags',
                    imageUrl: 'assets/images/DragonFlags.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                        {
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 7,
                    name: 'Decline Situps',
                    imageUrl: 'assets/images/DeclineSitups.png',
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.NoWeight,
                    isFavorite: false,
                    reps: [
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                        {
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 8,
                    name: 'Cross Body Crunch',
                    imageUrl: 'assets/images/CrossBodyCrunch.png',
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.NoWeight,
                    isFavorite: false,
                    reps: [
                        {
                            times: 15
                        },
                        {
                            times: 15
                        },
                        {
                            times: 15
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 9,
                    name: 'Lying Scissors Kicks',
                    imageUrl: 'assets/images/LyingScissorsKicks.png',
                    repetition: RepetitionSpeed.OneOne,
                    weightType: WeightType.NoWeight,
                    isFavorite: false,
                    reps: [
                        {
                            times: 15
                        },
                        {
                            times: 15
                        },
                        {
                            times: 15
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }],
                }]
            }, {
            id: 1,
            name: 'Lower Body',
            exercises: [{
                set: [{
                    id: 1,
                    name: 'Walking Lunge with Side Weights',
                    imageUrl: 'assets/images/WalkingLungeWithSideWeights.png',
                    repetitionSpeed:  RepetitionSpeed.OneOne,
                    weightType: WeightType.Dumbbell,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 2,
                    name: 'Cable Abduction',
                    imageUrl: 'assets/images/CableAbduction.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }, {
                    id: 3,
                    name: 'Cable Adduction',
                    imageUrl: 'assets/images/CableAdduction.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 4,
                    name: 'Cable Leg Curl',
                    imageUrl: 'assets/images/CableLegCurl.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 50,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 5,
                    name: 'Cable Calf Raise',
                    imageUrl: 'assets/images/CableCalfRaise.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 70,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 6,
                    name: 'Bodyweight Flutter Kicks',
                    imageUrl: 'assets/images/BodyweightFlutterKicks.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                        {
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 7,
                    name: 'Weighted Situps',
                    imageUrl: 'assets/images/WeightedSitups.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        },
                        {
                            weight: 25,
                            WeightUnit: WeightUnit.Lbs,
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 8,
                    name: 'Plank',
                    imageUrl: 'assets/images/Plank.png',
                    isFavorite: false,
                    reps: [
                        {
                            time: 60
                        },
                        {
                            time: 60
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                    }]}, {
                set: [{
                    id: 9,
                    name: 'Twist',
                    imageUrl: 'assets/images/Twist.png',
                    repetition: RepetitionSpeed.OneOne,
                    isFavorite: false,
                    reps: [
                        {
                            times: 12
                        },
                        {
                            times: 12
                        },
                        {
                            times: 12
                        }
                    ],
                    restBetweenSets: 20,
                    restAfterExercise: 20
                }]
            }],
        }]
    };
}
enum WeightType {
    EzBar = 'Ez-Bar',
    Barbell = 'Barbell',
    Dumbbell = 'Dumbbell',
    Kettleball = 'Kettlebell',
    Plate = 'Plate',
    NoWeight = ''
}
enum GripType {
    Underhand = 'Underhand',
    Overhand = 'Overhand',
    Neutral = 'Neutral'
}
enum GripWidth {
    Narrow = 'Narrow',
    Normal = 'Normal',
    Wide = 'Wide'
}
enum RepetitionSpeed {
    OneOne = '1:1',
    TwoTwo = '2:2',
    TwoFour = '2:4'
}
enum WeightUnit {
    Lbs,
    Kg
}
