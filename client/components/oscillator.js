const oscillator = new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
        partials: [0, 2, 3, 4]
    },
    "envelope": {
        'attack': 0.11,
        'decay': 0.21,
        'sustain': 0.09,
        'release': 1.2
    }
})

const pattern = new Tone.Pattern((time, note) => {
    oscillator.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"])


const startButton = new Nexus.Button('#startArpeggiator')

let playing = false;

startButton.on('click', (e) => {

    if (playing === false) {
        pattern.start(0)
        Tone.Transport.start();
        playing = true;
    } else {
        pattern.stop();
        playing = false
    }
})







module.exports = { pattern, startButton, oscillator }








