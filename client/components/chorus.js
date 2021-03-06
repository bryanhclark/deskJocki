const chorus = new Tone.Chorus({
    frequency: 1.5, //frequency of the lfo
    delayTime: 8, //2 to 20
    depth: 0.4, //0 to 1
    feedback: 0.3, //0 tp 1
    type: 'sine',
    spread: 180, //0 to 360
    wet: 0.3 //0 to 1
})


const chorusDelayTime = new Nexus.Slider('#chorusDelaySlider')
const chorusWet = new Nexus.Slider('#chorusWet')
const chorusFeedback = new Nexus.Slider('#chorusFeedback', {
    min: 0,
    max: 0.5
})
const chorusDepth = new Nexus.Slider('#chorusDepth')


chorusDelayTime.colorize("accent", "#FFE066")
chorusDelayTime.colorize('fill', "#363a3a")
chorusWet.colorize("accent", "#FFE066")
chorusWet.colorize('fill', "#363a3a")
chorusFeedback.colorize("accent", "#FFE066")
chorusFeedback.colorize('fill', "#363a3a")
chorusDepth.colorize("accent", "#FFE066")
chorusDepth.colorize('fill', "#363a3a")



module.exports = {
    chorus,
    chorusDelayTime,
    chorusWet,
    chorusFeedback,
    chorusDepth
}
