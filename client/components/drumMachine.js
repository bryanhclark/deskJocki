const { reverb, reverbRoomSizeSlider } = require('./reverb')
const drumVolume = require('./volume')
const { waveform, fft } = require('./oscilloscope')

const drums = new Tone.Players({
    "hihat0": "./samples/hihat.wav",
    "hihat1": "./samples/hihat2.wav",
    "hihat2": "./samples/hihat3.wav",
    "snare0": "./samples/snare.wav",
    "snare1": "./samples/snare2.wav",
    "snare2": "./samples/snare3.wav",
    "kick0": "./samples/kick.wav",
    "kick1": "./samples/kick2.wav",
    "kick2": "samples/kick3.wav"

},
    () => {
        console.log('loaded')
    }).chain(reverb, drumVolume, waveform, Tone.Master)






const drumSequencer = new Nexus.Sequencer('#drumMachine', {
    'size': [800, 200],
    'mode': 'toggle',
    'rows': 9,
    'columns': 32
})


const drumVolumeSlider = new Nexus.Slider('#drumVolumeSlider', {
    min: -64,
    max: 6
})

drumVolumeSlider.on('change', (val) => {
    drumVolume.volume.value = val;
})

const drumMuteButton = new Nexus.RadioButton('#drumMuteButton', {
    'numberOfButtons': 1
})

drumMuteButton.on('change', (val) => {
    if (val === 0) drumVolume.mute = true
    else drumVolume.mute = false
})

drumSequencer.colorize("accent", "#D81135")
drumSequencer.colorize('fill', "#363a3a")

drumVolumeSlider.colorize("accent", "#D81135")
drumVolumeSlider.colorize('fill', "#363a3a")
drumMuteButton.colorize("accent", "#D81135")
drumMuteButton.colorize('fill', "#363a3a")


module.exports = { drums, drumSequencer, drumVolume }

