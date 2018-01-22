const delay = new Tone.PingPongDelay({
    delayTime: '8n',
    feedback: 0.0,
    wet: 0.0
})


const delayFeedbackDial = new Nexus.Slider('#delayFeedbackDiv')
const delayWetDial = new Nexus.Slider('#delayWetDiv')

delayFeedbackDial.colorize("accent", "#FFE066")
delayFeedbackDial.colorize('fill', "#363a3a")
delayWetDial.colorize("accent", "#FFE066")
delayWetDial.colorize('fill', "#363a3a")






module.exports = {
    delay,
    delayFeedbackDial,
    delayWetDial
}