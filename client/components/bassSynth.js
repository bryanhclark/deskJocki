const bassSequencer = new Nexus.Sequencer('#bassSequencer', {
    size: [800, 350],
    mode: 'toggle',
    rows: 14,
    columns: 32
})

//SEQUENCER COLOR OPTIONS
bassSequencer.colorize("accent", "#0D86BA")
bassSequencer.colorize('fill', "#363a3a")

const bassLoop = [["C1", '8n'], ['D1', '8n'], ['E1', '8n'], ['F1', '8n'], ['G1', '8n'], ['A1', '8n'], ['B1', '8n'], ["C2", '8n'], ['D2', '8n'], ['E2', '8n'], ['F2', '8n'], ['G2', '8n'], ['A2', '8n'], ['B2', '8n']]

const bassSynth = new Tone.MonoSynth({
    "volume": 7,
    filter: {
        Q: 2,
        type: "lowshelf",
        frequency: 200,
        gain: -24,
    },
    filter: {
        type: "lowpass",
        Q: 7,
        frequency: 10000,
        gain: -24,
    },
    "envelope": {
        "attack": 0.001,
        "decay": 1,
        "sustain": 0.4,
        "release": 0.1,
    },
    "filterEnvelope": {
        "attack": 0.001,
        "decay": 0.31,
        "sustain": 1,
        "baseFrequency": 150,
        "octaves": 2.6
    }
})





module.exports = { bassSequencer, bassLoop, bassSynth }