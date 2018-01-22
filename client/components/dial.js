const attackDial = new Nexus.Slider('#attackDial')
const decayDial = new Nexus.Slider('#decayDial')
const sustainDial = new Nexus.Slider('#sustainDial')
const releaseDial = new Nexus.Slider('#releaseDial')

attackDial.colorize("accent", "#FFE066")
attackDial.colorize('fill', "#363a3a")
decayDial.colorize("accent", "#FFE066")
decayDial.colorize('fill', "#363a3a")
sustainDial.colorize("accent", "#FFE066")
sustainDial.colorize('fill', "#363a3a")
releaseDial.colorize("accent", "#FFE066")
releaseDial.colorize('fill', "#363a3a")



module.exports = {
    attackDial,
    decayDial,
    sustainDial,
    releaseDial
}