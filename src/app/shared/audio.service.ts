import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
    private player: HTMLAudioElement;
    constructor() {
        this.player = new Audio('assets/audio/pistol.mp3');
    }

    playStartWorkout() {
        this.player.play();
    }
}
