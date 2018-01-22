

let keysAllowed = {};




const playNote = (event, oscillator) => {
    if (event.key === 'Tab') event.preventDefault();
    if (keysAllowed[event.key] === false) return;
    keysAllowed[event.key] = false;
    switch (event.key) {
        case 'Tab': oscillator.playOrReleaseNote('C3', 'attack', 0)
            break;
        case 'q': oscillator.playOrReleaseNote('D3', 'attack', 2)
            break;
        case 'w': oscillator.playOrReleaseNote('E3', 'attack', 4)
            break;
        case 'e': oscillator.playOrReleaseNote('F3', 'attack', 5)
            break;
        case 'r': oscillator.playOrReleaseNote('G3', 'attack', 7)
            break;
        case 't': oscillator.playOrReleaseNote('A3', 'attack', 9)
            break;
        case 'y': oscillator.playOrReleaseNote('B3', 'attack', 11)
            break;
        case 'u': oscillator.playOrReleaseNote('C4', 'attack', 12)
            break;
        case 'i': oscillator.playOrReleaseNote('D4', 'attack', 14)
            break;
        case 'o': oscillator.playOrReleaseNote('E4', 'attack', 16)
            break;
        case 'p': oscillator.playOrReleaseNote('F4', 'attack', 17)
            break;
        case '[': oscillator.playOrReleaseNote('G4', 'attack', 19)
            break;
        case ']': oscillator.playOrReleaseNote('A4', 'attack', 21)
            break;
        case '\\': oscillator.playOrReleaseNote('B4', 'attack', 23)
            break;
        case '1': oscillator.playOrReleaseNote('Db3', 'attack', 1)
            break;
        case '2': oscillator.playOrReleaseNote('Eb3', 'attack', 3)
            break;
        case '4': oscillator.playOrReleaseNote('Gb3', 'attack', 6)
            break;
        case '5': oscillator.playOrReleaseNote('Ab3', 'attack', 8)
            break;
        case '6': oscillator.playOrReleaseNote('Bb3', 'attack', 10)
            break;
        case '8': oscillator.playOrReleaseNote('Db4', 'attack', 13)
            break;
        case '9': oscillator.playOrReleaseNote('Eb4', 'attack', 15)
            break;
        case '-': oscillator.playOrReleaseNote('Gb4', 'attack', 18)
            break;
        case '=': oscillator.playOrReleaseNote('Ab4', 'attack', 20)
            break;
        case 'Backspace': oscillator.playOrReleaseNote('Bb4', 'attack', 22)
            break;
        default: return;
    }
}

const releaseNote = (event, oscillator) => {
    switch (event.key) {
        case 'Tab': oscillator.playOrReleaseNote('C3', 'release', 0)
            break;
        case 'q': oscillator.playOrReleaseNote('D3', 'release', 2)
            break;
        case 'w': oscillator.playOrReleaseNote('E3', 'release', 4)
            break;
        case 'e': oscillator.playOrReleaseNote('F3', 'release', 5)
            break;
        case 'r': oscillator.playOrReleaseNote('G3', 'release', 7)
            break;
        case 't': oscillator.playOrReleaseNote('A3', 'release', 9)
            break;
        case 'y': oscillator.playOrReleaseNote('B3', 'release', 11)
            break;
        case 'u': oscillator.playOrReleaseNote('C4', 'release', 12)
            break;
        case 'i': oscillator.playOrReleaseNote('D4', 'release', 14)
            break;
        case 'o': oscillator.playOrReleaseNote('E4', 'release', 16)
            break;
        case 'p': oscillator.playOrReleaseNote('F4', 'release', 17)
            break;
        case '[': oscillator.playOrReleaseNote('G4', 'release', 19)
            break;
        case ']': oscillator.playOrReleaseNote('A4', 'release', 21)
            break;
        case '\\': oscillator.playOrReleaseNote('B4', 'release', 23)
            break;
        case '1': oscillator.playOrReleaseNote('Db3', 'release', 1)
            break;
        case '2': oscillator.playOrReleaseNote('Eb3', 'release', 3)
            break;
        case '4': oscillator.playOrReleaseNote('Gb3', 'release', 6)
            break;
        case '5': oscillator.playOrReleaseNote('Ab3', 'release', 8)
            break;
        case '6': oscillator.playOrReleaseNote('Bb3', 'release', 10)
            break;
        case '8': oscillator.playOrReleaseNote('Db4', 'release', 13)
            break;
        case '9': oscillator.playOrReleaseNote('Eb4', 'release', 15)
            break;
        case '-': oscillator.playOrReleaseNote('Gb4', 'release', 18)
            break;
        case '=': oscillator.playOrReleaseNote('Ab4', 'release', 20)
            break;
        case 'Backspace': oscillator.playOrReleaseNote('Bb4', 'release', 22)
            break;
        default: return;
    }
    // resets key so that it can be played again
    keysAllowed[event.key] = true;
}

module.exports = {
    playNote,
    releaseNote
}