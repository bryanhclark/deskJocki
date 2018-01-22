const distortion = new Tone.Distortion({
    distortion: 0, // 0 to 1;
    oversample: "none"
})

const distortionSlider = new Nexus.Slider('#distortionSlider')


distortionSlider.on('change', (val) => {

    distortion.distortion = val
    console.log(distortion.distortion)
})

distortionSlider.colorize("accent", "#0D86BA")
distortionSlider.colorize('fill', "#363a3a")



module.exports = { distortion, distortionSlider }




