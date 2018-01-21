Tone.Transport.bpm.value = 80;

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
    }).toMaster();






const drumSequencer = new Nexus.Sequencer('#drumMachine', {
    'size': [400, 200],
    'mode': 'toggle',
    'rows': 9,
    'columns': 16
})


const drumMachineButton = new Nexus.Button('#drumMachineButton')


module.exports = { drums, drumSequencer, drumMachineButton }

