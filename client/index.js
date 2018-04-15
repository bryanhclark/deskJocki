const { attackDial, decayDial, sustainDial, releaseDial } = require('./components/dial')
const { distortion, distortionSlider } = require('./components/distortion')
const { delay, delayFeedbackDial, delayWetDial } = require('./components/delay')
const { oscillator } = require('./components/oscillator')
const { waveform, fft } = require('./components/oscilloscope')
const { playNote, releaseNote } = require('./scripts/playNote')
const { sequencer, loop } = require('./components/sequencer')
const { chorus, chorusDelayTime, chorusWet, chorusFeedback, chorusDepth } = require('./components/chorus')
const { drums, drumSequencer } = require('./components/drumMachine')
const bassVolume = require('./components/bassVolume')
const synthVolume = require('./components/synthVolume')
const envelope = require('./components/envelope')

const { bassSequencer, bassLoop, bassSynth } = require('./components/bassSynth')
// const context = new (window.AudioContext || window.webkitAudioContext)();
// const analyser = context.createAnalyser();




//MAIN INTRUMENT CHAIN
oscillator.chain(chorus, delay, synthVolume, waveform, Tone.Master)

//GLOBAL PLAY/PAUSE CONTROLS


const globalPlayButton = document.getElementById('globalPlayButton')
const globalStopButton = document.getElementById("globalStopButton")
globalPlayButton.addEventListener('click', (e) => {
    event.preventDefault()
    Tone.Transport.start();
    [drumSequencer, bassSequencer, sequencer].forEach(k => k.start());
})



globalStopButton.addEventListener('click', (e) => {
    event.preventDefault()
    Tone.Transport.stop();
    [drumSequencer, bassSequencer, sequencer].forEach(k => {
        k.stepper.value = -1;
        k.stop()
    });
})

//global tempo slider
Tone.Transport.bpm.value = 40;
const globalTempoSlider = new Nexus.Slider('#globalTempoSlider', {
    min: 60,
    max: 200
})

globalTempoSlider.on('change', (val) => {
    Tone.Transport.bpm.value = parseInt(val);
    [drumSequencer, bassSequencer, sequencer].forEach(k => {
        k.interval.ms(parseInt(val))
        console.log(k.interval.rate)
    })
})

//GLOBAL VOLUME CONTROLS

const globalVolumeSlider = new Nexus.Slider('#globalVolumeSlider',
    {
        min: -64,
        max: 6
    })

globalVolumeSlider.on('change', (val) => {
    if (val === -24) Tone.Master.mute = true
    Tone.Master.volume.value = Math.floor(val);
})

globalVolumeSlider.colorize('fill', "#363a3a")
globalTempoSlider.colorize('fill', "#363a3a")

//ALLOWS THE KEYBOARD TO PLAY THE NOTES
oscillator.playOrReleaseNote = (note, action, visualKey) => {
    if (action === 'attack') oscillator.triggerAttack(note, null, 10)
    else if (action === 'release') oscillator.triggerRelease(note)
}

//SYNTH VOLUME CONTROLS
const synthVolumeSlider = new Nexus.Slider('#synthVolumeSlider', {
    min: -64,
    max: 6
})

synthVolumeSlider.on('change', (val) => {
    synthVolume.volume.value = val;
})

const synthMuteButton = new Nexus.RadioButton('#synthMuteButton', {
    'numberOfButtons': 1
})

synthVolumeSlider.colorize("accent", "#FFE066")
synthVolumeSlider.colorize('fill', "#363a3a")
synthMuteButton.colorize("accent", "#FFE066")
synthMuteButton.colorize('fill', "#363a3a")


synthMuteButton.on('change', (val) => {
    if (val === 0) synthVolume.mute = true
    else synthVolume.mute = false
})

delayFeedbackDial.on('change', (val) => {
    delay.feedback.value = val;
})
delayWetDial.on('change', (val) => {
    delay.wet.value = val;
})

chorusDelayTime.on('change', (val) => {
    let newVal = (val * 20)
    chorus.delayTime = newVal;
})

chorusWet.on('change', (val) => {
    chorus.wet.value = val
})

chorusFeedback.on('change', (val) => {
    chorus.feedback.value = val
})

chorusDepth.on('change', (val) => {
    chorus.depth = val
})



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
//FUNCTION THAT PLAYS THE NOTES WHEN CLICKED
sequencer.on('step', (event) => {
    for (let i = 0; i <= event.length; i++) {
        if (event[i]) oscillator.triggerAttackRelease(loop[i][0], loop[i][1])
    }
})

//BASS SYNTH STUFF

bassSynth.chain(distortion, bassVolume, waveform, Tone.Master)

bassSequencer.on('step', (event) => {
    for (let i = 0; i <= event.length; i++) {
        if (event[i]) {
            bassSynth.triggerAttackRelease(bassLoop[i][0], '16n')
        }
    }
})

const bassVolumeSlider = new Nexus.Slider('#bassVolumeSlider', {
    min: -64,
    max: 6
})



bassVolumeSlider.on('change', (val) => {
    bassVolume.volume.value = val;
})

const bassMuteButton = new Nexus.RadioButton('#bassMuteButton', {
    'numberOfButtons': 1
})

bassMuteButton.on('change', (val) => {
    if (val === 0) bassVolume.mute = true
    else bassVolume.mute = false
})

bassVolumeSlider.colorize("accent", "#0D86BA")
bassVolumeSlider.colorize('fill', "#363a3a")
bassMuteButton.colorize("accent", "#0D86BA")
bassMuteButton.colorize('fill', "#363a3a")




const instruments = ["kick0", "kick1", "kick2", "snare0", "snare1", "snare2", "hihat0", "hihat1", "hihat2"]

//DRUM MACHINE
drumSequencer.on('step', (event) => {
    for (let i = 0; i <= event.length; i++) {
        if (event[i]) {
            drums._players[instruments[i]].start()
        };
    }
})







window.addEventListener('keydown', (e) => playNote(e, oscillator))
window.addEventListener('keyup', (e) => releaseNote(e, oscillator))





