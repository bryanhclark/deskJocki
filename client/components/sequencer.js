//SYNTH SEQUENCER MATRIX
const sequencer = new Nexus.Sequencer("#sequencer", {
    'size': [800, 350],
    'mode': 'toggle',
    'rows': 14,
    'columns': 32
});

//SEQUENCER COLOR OPTIONS
sequencer.colorize("accent", "#FFE066")
sequencer.colorize('fill', "#363a3a")
sequencer.colorize('mediumLight', "#FFF")


//INVERTED BPM SLIDER

//NOTES IN THE SEQUENCER MATRIX
const loop = [["C3", '8n'], ['D3', '8n'], ['E3', '8n'], ['F3', '8n'], ['G3', '8n'], ['A3', '8n'], ['B3', '8n'], ["C4", '8n'], ['D4', '8n'], ['E4', '8n'], ['F4', '8n'], ['G4', '8n'], ['A4', '8n'], ['B4', '8n']]



module.exports = {
    loop,
    sequencer
};


