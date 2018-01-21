const delay = new Tone.PingPongDelay({
    delayTime: '8n',
    feedback: 0.0,
    wet: 0.0
}).toMaster()


const delayFeedbackDial = new Nexus.Slider('#delayFeedbackDiv')
const delayWetDial = new Nexus.Slider('#delayWetDiv')

delayFeedbackDial.on('change', (val) => {
    delay.feedback.value = val;
})
delayWetDial.on('change', (val) => {
    delay.wet.value = val;
})


module.exports = {
    delay,
    delayFeedbackDial,
    delayWetDial
}