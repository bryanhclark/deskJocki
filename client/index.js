const keyboard = require('./components/keyboard')
const { attackDial, decayDial, sustainDial, releaseDial } = require('./components/dial')
const { delay, delayFeedbackDial, delayWetDial } = require('./components/delay')
const { pattern, startButton, oscillator } = require('./components/oscillator')
const { waveform, fft } = require('./components/oscilloscope')
const { playNote, releaseNote } = require('./scripts/playNote')
const { filter, filterSlider } = require('./components/lowpassFilter')
const { sequencer, sequencerBPMSlider, sequencerButton, loop } = require('./components/sequencer')
const { chorus, chorusDelayTime, chorusWet, chorusFeedback, chorusDepth } = require('./components/chorus')
const { drums, drumSequencer, drumMachineButton } = require('./components/drumMachine')
const envelope = require('./components/envelope')

const context = new (window.AudioContext || window.webkitAudioContext)();
const analyser = context.createAnalyser();


//MAIN INTRUMENT CHAIN
oscillator.chain(chorus, delay, waveform).toMaster()

//ALLOWS THE KEYBOARD TO PLAY THE NOTES
oscillator.playOrReleaseNote = (note, action, visualKey) => {
    if (action === 'attack') oscillator.triggerAttack(note, null, 10)
    else if (action === 'release') oscillator.triggerRelease(note)
}

//ADSR DIAL CONTROLS
//attack
attackDial.on('change', (val) => {
    oscillator.voices.forEach(voice => {
        voice.envelope.attack = val
    })
})
//decay
decayDial.on('change', (val) => {
    oscillator.voices.forEach(voice => {
        voice.envelope.decay = val
    })
})
//sustain
sustainDial.on('change', (val) => {
    oscillator.voices.forEach(voice => {
        voice.envelope.sustain = val
    })
})
//release
releaseDial.on('change', (val) => {
    oscillator.voices.forEach(voice => {
        voice.envelope.release = val
    })
})

//SYNTH SEQUENCER CONTROLS
sequencerBPMSlider.on('change', (val) => {
    sequencer.interval.rate = Math.floor(val);
})

//FUNCTION THAT PLAYS THE NOTES WHEN CLICKED
sequencer.on('step', (event) => {
    for (let i = 0; i < event.length; i++) {
        if (event[i]) oscillator.triggerAttackRelease(loop[i][0], loop[i][1])
    }
})

//DONT DELETE THIS
let isPlaying = false;
////SEQUENCER ON/OFF Button
sequencerButton.on('click', (e) => {
    if (isPlaying === false) {
        isPlaying = true
        sequencer.start()
    }
    else {
        isPlaying = false;
        sequencer.stop()
    }
})



// keyboard.on('change', function (v) {
//     console.log(v);
//     if (v.state === true) oscillator.triggerAttack(v.note * 5);
//     else oscillator.triggerRelease();

// })


const instruments = ["kick0", "kick1", "kick2", "snare0", "snare1", "snare2", "hihat0", "hihat1", "hihat2"]

//DRUM MACHINE
drumSequencer.on('step', (event) => {
    for (let i = 0; i < event.length; i++) {
        if (event[i]) {
            let currentInstrument = drums._players[instruments[i]]
            currentInstrument.start();
        };
    }
})

let drumMachineIsPlaying = false

drumMachineButton.on('click', (e) => {
    if (drumMachineIsPlaying === false) {
        drumMachineIsPlaying = true
        drumSequencer.start()
    }
    else {
        drumMachineIsPlaying = false;
        drumSequencer.stop()
    }
})




window.addEventListener('keydown', (e) => playNote(e, oscillator))
window.addEventListener('keyup', (e) => releaseNote(e, oscillator))





