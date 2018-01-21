const filter = new Tone.Filter({
    type: "lowpass",
    frequency: 200,
    rolloff: -12,
    Q: 1,
    gain: 5
})

const filterSlider = new Nexus.Slider('#filter')

module.exports = { filter, filterSlider };