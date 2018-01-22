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










module.exports = { oscillator }








