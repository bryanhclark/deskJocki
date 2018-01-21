const piano = new Nexus.Piano('#keyboard', {
    'size': [700, 125],
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 60,
    'highNote': 80
})

module.exports = piano;