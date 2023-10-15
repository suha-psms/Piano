import "./style.css";
import {Note } from "./models";


// main.ts
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.natural-key, .accidental-key');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const note = button.id;
            playSound(note);
        });
    });
});

function playSound(note: string) {

    if(note.includes("-sharp")) { 
        note = note.replace("-sharp", "Sharp"); 
    }
    const audio = new Audio(`sounds/piano_${note}.mp3`);
    audio.play()
        .then(() => {
            console.log(`Audio playback for note ${note} started`);
        })
        .catch((error) => {
            console.error('Error playing the audio: ', error);
            alert('Sorry, an error occurred while trying to play the sound. Please try again later.');
        });
}
