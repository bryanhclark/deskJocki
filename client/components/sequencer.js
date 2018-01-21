//SYNTH SEQUENCER MATRIX
const sequencer = new Nexus.Sequencer("#sequencer", {
    'size': [600, 300],
    'mode': 'toggle',
    'rows': 14,
    'columns': 16
});
//INVERTED BPM SLIDER
const sequencerBPMSlider = new Nexus.Slider('#sequencerBPMSlider', {
    min: 80,
    max: 200
})
//NOTES IN THE SEQUENCER MATRIX
const loop = [["C3", '8n'], ['D3', '8n'], ['E3', '8n'], ['F3', '8n'], ['G3', '8n'], ['A3', '8n'], ['B3', '8n'], ["C4", '8n'], ['D4', '8n'], ['E4', '8n'], ['F4', '8n'], ['G4', '8n'], ['A4', '8n'], ['B4', '8n']]

//SYNTH SEQUENCER START/STOP BUTTON
const sequencerButton = new Nexus.Button('#sequencerStart')

module.exports = {
    loop,
    sequencer,
    sequencerBPMSlider,
    sequencerButton
};


