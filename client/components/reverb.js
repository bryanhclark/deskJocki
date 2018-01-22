const reverb = new Tone.Freeverb({
    roomSize: 0,
    dampening: 3000
})


const reverbRoomSizeSlider = new Nexus.Slider('#reverbRoomSizeSlider')


reverbRoomSizeSlider.on('change', (val) => {
    console.log(reverb.roomSize.value)
    reverb.roomSize.value = val;
})

reverbRoomSizeSlider.colorize("accent", "#D81135")
reverbRoomSizeSlider.colorize('fill', "#363a3a")



module.exports = { reverb, reverbRoomSizeSlider }