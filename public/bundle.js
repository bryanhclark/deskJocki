/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chorus = new Tone.Chorus({
    frequency: 1.5, //frequency of the lfo
    delayTime: 8, //2 to 20
    depth: 0.4, //0 to 1
    feedback: 0.3, //0 tp 1
    type: 'sine',
    spread: 180, //0 to 360
    wet: 0.3 //0 to 1
});

var chorusDelayTime = new Nexus.Slider('#chorusDelaySlider');
var chorusWet = new Nexus.Slider('#chorusWet');
var chorusFeedback = new Nexus.Slider('#chorusFeedback', {
    min: 0,
    max: 0.5
});
var chorusDepth = new Nexus.Slider('#chorusDepth');

chorusDelayTime.on('change', function (val) {
    var newVal = val * 20;
    chorus.delayTime = newVal;
});

chorusWet.on('change', function (val) {
    chorus.wet.value = val;
});

chorusFeedback.on('change', function (val) {
    chorus.feedback.value = val;
});

chorusDepth.on('change', function (val) {
    chorus.depth = val;
});

module.exports = {
    chorus: chorus,
    chorusDelayTime: chorusDelayTime,
    chorusWet: chorusWet,
    chorusFeedback: chorusFeedback,
    chorusDepth: chorusDepth
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delay = new Tone.PingPongDelay({
    delayTime: '8n',
    feedback: 0.0,
    wet: 0.0
}).toMaster();

var delayFeedbackDial = new Nexus.Slider('#delayFeedbackDiv');
var delayWetDial = new Nexus.Slider('#delayWetDiv');

delayFeedbackDial.on('change', function (val) {
    delay.feedback.value = val;
});
delayWetDial.on('change', function (val) {
    delay.wet.value = val;
});

module.exports = {
    delay: delay,
    delayFeedbackDial: delayFeedbackDial,
    delayWetDial: delayWetDial
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attackDial = new Nexus.Dial('#attackDial');
var decayDial = new Nexus.Dial('#decayDial');
var sustainDial = new Nexus.Dial('#sustainDial');
var releaseDial = new Nexus.Dial('#releaseDial');

module.exports = {
    attackDial: attackDial,
    decayDial: decayDial,
    sustainDial: sustainDial,
    releaseDial: releaseDial
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Tone.Transport.bpm.value = 80;

var drums = new Tone.Players({
    "hihat0": "./samples/hihat.wav",
    "hihat1": "./samples/hihat2.wav",
    "hihat2": "./samples/hihat3.wav",
    "snare0": "./samples/snare.wav",
    "snare1": "./samples/snare2.wav",
    "snare2": "./samples/snare3.wav",
    "kick0": "./samples/kick.wav",
    "kick1": "./samples/kick2.wav",
    "kick2": "samples/kick3.wav"

}, function () {
    console.log('loaded');
}).toMaster();

var drumSequencer = new Nexus.Sequencer('#drumMachine', {
    'size': [400, 200],
    'mode': 'toggle',
    'rows': 9,
    'columns': 16
});

var drumMachineButton = new Nexus.Button('#drumMachineButton');

module.exports = { drums: drums, drumSequencer: drumSequencer, drumMachineButton: drumMachineButton };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var envelope = new Tone.AmplitudeEnvelope({
    "attack": 0.11,
    "decay": 0.21,
    "sustain": 0.09,
    "release": 1.2
});

module.exports = envelope;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var piano = new Nexus.Piano('#keyboard', {
    'size': [700, 125],
    'mode': 'button', // 'button', 'toggle', or 'impulse'
    'lowNote': 60,
    'highNote': 80
});

module.exports = piano;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var filter = new Tone.Filter({
    type: "lowpass",
    frequency: 200,
    rolloff: -12,
    Q: 1,
    gain: 5
});

var filterSlider = new Nexus.Slider('#filter');

module.exports = { filter: filter, filterSlider: filterSlider };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var oscillator = new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
        partials: [0, 2, 3, 4]
    },
    "envelope": {
        'attack': 0.11,
        'decay': 0.21,
        'sustain': 0.09,
        'release': 1.2
    }
});

var pattern = new Tone.Pattern(function (time, note) {
    oscillator.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"]);

var startButton = new Nexus.Button('#startArpeggiator');

var playing = false;

startButton.on('click', function (e) {

    if (playing === false) {
        pattern.start(0);
        Tone.Transport.start();
        playing = true;
    } else {
        pattern.stop();
        playing = false;
    }
});

module.exports = { pattern: pattern, startButton: startButton, oscillator: oscillator };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var waveform = new Tone.Waveform(1024);

//analyse the frequency/amplitude of the incoming signal
// const fft = new Tone.FFT(32);
//get the waveform data for the audio

//the waveform data
var waveContext = $("<canvas>", {
    "id": "waveform"
}).appendTo("#Content").get(0).getContext("2d");
var waveformGradient;
function drawWaveform(values) {
    //draw the waveform
    waveContext.clearRect(0, 0, canvasWidth, canvasHeight);
    waveContext.beginPath();
    waveContext.lineJoin = "round";
    waveContext.lineWidth = 6;
    waveContext.strokeStyle = waveformGradient;
    waveContext.moveTo(0, values[0] / 255 * canvasHeight);
    for (var i = 1, len = values.length; i < len; i++) {
        var val = (values[i] + 1) / 2;
        var x = canvasWidth * (i / len);
        var y = val * canvasHeight;
        waveContext.lineTo(x, y);
    }
    waveContext.stroke();
}
//size the canvases
var canvasWidth, canvasHeight;
function sizeCanvases() {
    canvasWidth = $("#waveform").width();
    canvasHeight = $("#waveform").height();
    waveContext.canvas.width = canvasWidth;
    // fftContext.canvas.width = canvasWidth;
    waveContext.canvas.height = canvasHeight;
    // fftContext.canvas.height = canvasHeight;
    //make the gradient
    waveformGradient = waveContext.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    waveformGradient.addColorStop(0, "#ddd");
    waveformGradient.addColorStop(1, "#000");
}
sizeCanvases();
$(window).resize(sizeCanvases);
function loop() {
    requestAnimationFrame(loop);
    //get the fft data and draw it

    //get the waveform valeus and draw it
    var waveformValues = waveform.getValue();
    drawWaveform(waveformValues);
}
loop();

module.exports = {
    waveform: waveform
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//SYNTH SEQUENCER MATRIX
var sequencer = new Nexus.Sequencer("#sequencer", {
    'size': [600, 300],
    'mode': 'toggle',
    'rows': 14,
    'columns': 16
});
//INVERTED BPM SLIDER
var sequencerBPMSlider = new Nexus.Slider('#sequencerBPMSlider', {
    min: 80,
    max: 200
});
//NOTES IN THE SEQUENCER MATRIX
var loop = [["C3", '8n'], ['D3', '8n'], ['E3', '8n'], ['F3', '8n'], ['G3', '8n'], ['A3', '8n'], ['B3', '8n'], ["C4", '8n'], ['D4', '8n'], ['E4', '8n'], ['F4', '8n'], ['G4', '8n'], ['A4', '8n'], ['B4', '8n']];

//SYNTH SEQUENCER START/STOP BUTTON
var sequencerButton = new Nexus.Button('#sequencerStart');

module.exports = {
    loop: loop,
    sequencer: sequencer,
    sequencerBPMSlider: sequencerBPMSlider,
    sequencerButton: sequencerButton
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysAllowed = {};

var playNote = function playNote(event, oscillator) {
    // use for computer keyboard - do keyDown events measure velocity?
    // prevents Tab from shifting focus
    if (event.key === 'Tab') event.preventDefault();
    // since keyDown events eventually re-trigger when a key is held down, storing them in an object and using this check will prevent the note from interrupting/replaying
    if (keysAllowed[event.key] === false) return;
    keysAllowed[event.key] = false;
    // based on event.key => toggle a certain oscillator.key (visual), and play a certain note using Tone
    switch (event.key) {
        case 'Tab':
            oscillator.playOrReleaseNote('C3', 'attack', 0);
            break;
        case 'q':
            oscillator.playOrReleaseNote('D3', 'attack', 2);
            break;
        case 'w':
            oscillator.playOrReleaseNote('E3', 'attack', 4);
            break;
        case 'e':
            oscillator.playOrReleaseNote('F3', 'attack', 5);
            break;
        case 'r':
            oscillator.playOrReleaseNote('G3', 'attack', 7);
            break;
        case 't':
            oscillator.playOrReleaseNote('A3', 'attack', 9);
            break;
        case 'y':
            oscillator.playOrReleaseNote('B3', 'attack', 11);
            break;
        case 'u':
            oscillator.playOrReleaseNote('C4', 'attack', 12);
            break;
        case 'i':
            oscillator.playOrReleaseNote('D4', 'attack', 14);
            break;
        case 'o':
            oscillator.playOrReleaseNote('E4', 'attack', 16);
            break;
        case 'p':
            oscillator.playOrReleaseNote('F4', 'attack', 17);
            break;
        case '[':
            oscillator.playOrReleaseNote('G4', 'attack', 19);
            break;
        case ']':
            oscillator.playOrReleaseNote('A4', 'attack', 21);
            break;
        case '\\':
            oscillator.playOrReleaseNote('B4', 'attack', 23);
            break;
        case '1':
            oscillator.playOrReleaseNote('Db3', 'attack', 1);
            break;
        case '2':
            oscillator.playOrReleaseNote('Eb3', 'attack', 3);
            break;
        case '4':
            oscillator.playOrReleaseNote('Gb3', 'attack', 6);
            break;
        case '5':
            oscillator.playOrReleaseNote('Ab3', 'attack', 8);
            break;
        case '6':
            oscillator.playOrReleaseNote('Bb3', 'attack', 10);
            break;
        case '8':
            oscillator.playOrReleaseNote('Db4', 'attack', 13);
            break;
        case '9':
            oscillator.playOrReleaseNote('Eb4', 'attack', 15);
            break;
        case '-':
            oscillator.playOrReleaseNote('Gb4', 'attack', 18);
            break;
        case '=':
            oscillator.playOrReleaseNote('Ab4', 'attack', 20);
            break;
        case 'Backspace':
            oscillator.playOrReleaseNote('Bb4', 'attack', 22);
            break;
        default:
            return;
    }
};

var releaseNote = function releaseNote(event, oscillator) {
    switch (event.key) {
        case 'Tab':
            oscillator.playOrReleaseNote('C3', 'release', 0);
            break;
        case 'q':
            oscillator.playOrReleaseNote('D3', 'release', 2);
            break;
        case 'w':
            oscillator.playOrReleaseNote('E3', 'release', 4);
            break;
        case 'e':
            oscillator.playOrReleaseNote('F3', 'release', 5);
            break;
        case 'r':
            oscillator.playOrReleaseNote('G3', 'release', 7);
            break;
        case 't':
            oscillator.playOrReleaseNote('A3', 'release', 9);
            break;
        case 'y':
            oscillator.playOrReleaseNote('B3', 'release', 11);
            break;
        case 'u':
            oscillator.playOrReleaseNote('C4', 'release', 12);
            break;
        case 'i':
            oscillator.playOrReleaseNote('D4', 'release', 14);
            break;
        case 'o':
            oscillator.playOrReleaseNote('E4', 'release', 16);
            break;
        case 'p':
            oscillator.playOrReleaseNote('F4', 'release', 17);
            break;
        case '[':
            oscillator.playOrReleaseNote('G4', 'release', 19);
            break;
        case ']':
            oscillator.playOrReleaseNote('A4', 'release', 21);
            break;
        case '\\':
            oscillator.playOrReleaseNote('B4', 'release', 23);
            break;
        case '1':
            oscillator.playOrReleaseNote('Db3', 'release', 1);
            break;
        case '2':
            oscillator.playOrReleaseNote('Eb3', 'release', 3);
            break;
        case '4':
            oscillator.playOrReleaseNote('Gb3', 'release', 6);
            break;
        case '5':
            oscillator.playOrReleaseNote('Ab3', 'release', 8);
            break;
        case '6':
            oscillator.playOrReleaseNote('Bb3', 'release', 10);
            break;
        case '8':
            oscillator.playOrReleaseNote('Db4', 'release', 13);
            break;
        case '9':
            oscillator.playOrReleaseNote('Eb4', 'release', 15);
            break;
        case '-':
            oscillator.playOrReleaseNote('Gb4', 'release', 18);
            break;
        case '=':
            oscillator.playOrReleaseNote('Ab4', 'release', 20);
            break;
        case 'Backspace':
            oscillator.playOrReleaseNote('Bb4', 'release', 22);
            break;
        default:
            return;
    }
    // resets key so that it can be played again
    keysAllowed[event.key] = true;
};

module.exports = {
    playNote: playNote,
    releaseNote: releaseNote
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keyboard = __webpack_require__(5);

var _require = __webpack_require__(2),
    attackDial = _require.attackDial,
    decayDial = _require.decayDial,
    sustainDial = _require.sustainDial,
    releaseDial = _require.releaseDial;

var _require2 = __webpack_require__(1),
    delay = _require2.delay,
    delayFeedbackDial = _require2.delayFeedbackDial,
    delayWetDial = _require2.delayWetDial;

var _require3 = __webpack_require__(7),
    pattern = _require3.pattern,
    startButton = _require3.startButton,
    oscillator = _require3.oscillator;

var _require4 = __webpack_require__(8),
    waveform = _require4.waveform,
    fft = _require4.fft;

var _require5 = __webpack_require__(10),
    playNote = _require5.playNote,
    releaseNote = _require5.releaseNote;

var _require6 = __webpack_require__(6),
    filter = _require6.filter,
    filterSlider = _require6.filterSlider;

var _require7 = __webpack_require__(9),
    sequencer = _require7.sequencer,
    sequencerBPMSlider = _require7.sequencerBPMSlider,
    sequencerButton = _require7.sequencerButton,
    loop = _require7.loop;

var _require8 = __webpack_require__(0),
    chorus = _require8.chorus,
    chorusDelayTime = _require8.chorusDelayTime,
    chorusWet = _require8.chorusWet,
    chorusFeedback = _require8.chorusFeedback,
    chorusDepth = _require8.chorusDepth;

var _require9 = __webpack_require__(3),
    drums = _require9.drums,
    drumSequencer = _require9.drumSequencer,
    drumMachineButton = _require9.drumMachineButton;

var envelope = __webpack_require__(4);

var context = new (window.AudioContext || window.webkitAudioContext)();
var analyser = context.createAnalyser();

//MAIN INTRUMENT CHAIN
oscillator.chain(chorus, delay, waveform).toMaster();

//ALLOWS THE KEYBOARD TO PLAY THE NOTES
oscillator.playOrReleaseNote = function (note, action, visualKey) {
    if (action === 'attack') oscillator.triggerAttack(note, null, 10);else if (action === 'release') oscillator.triggerRelease(note);
};

//ADSR DIAL CONTROLS
//attack
attackDial.on('change', function (val) {
    oscillator.voices.forEach(function (voice) {
        voice.envelope.attack = val;
    });
});
//decay
decayDial.on('change', function (val) {
    oscillator.voices.forEach(function (voice) {
        voice.envelope.decay = val;
    });
});
//sustain
sustainDial.on('change', function (val) {
    oscillator.voices.forEach(function (voice) {
        voice.envelope.sustain = val;
    });
});
//release
releaseDial.on('change', function (val) {
    oscillator.voices.forEach(function (voice) {
        voice.envelope.release = val;
    });
});

//SYNTH SEQUENCER CONTROLS
sequencerBPMSlider.on('change', function (val) {
    sequencer.interval.rate = Math.floor(val);
});

//FUNCTION THAT PLAYS THE NOTES WHEN CLICKED
sequencer.on('step', function (event) {
    for (var i = 0; i < event.length; i++) {
        if (event[i]) oscillator.triggerAttackRelease(loop[i][0], loop[i][1]);
    }
});

//DONT DELETE THIS
var isPlaying = false;
////SEQUENCER ON/OFF Button
sequencerButton.on('click', function (e) {
    if (isPlaying === false) {
        isPlaying = true;
        sequencer.start();
    } else {
        isPlaying = false;
        sequencer.stop();
    }
});

// keyboard.on('change', function (v) {
//     console.log(v);
//     if (v.state === true) oscillator.triggerAttack(v.note * 5);
//     else oscillator.triggerRelease();

// })


var instruments = ["kick0", "kick1", "kick2", "snare0", "snare1", "snare2", "hihat0", "hihat1", "hihat2"];

//DRUM MACHINE
drumSequencer.on('step', function (event) {
    for (var i = 0; i < event.length; i++) {
        if (event[i]) {
            var currentInstrument = drums._players[instruments[i]];
            currentInstrument.start();
        };
    }
});

var drumMachineIsPlaying = false;

drumMachineButton.on('click', function (e) {
    if (drumMachineIsPlaying === false) {
        drumMachineIsPlaying = true;
        drumSequencer.start();
    } else {
        drumMachineIsPlaying = false;
        drumSequencer.stop();
    }
});

window.addEventListener('keydown', function (e) {
    return playNote(e, oscillator);
});
window.addEventListener('keyup', function (e) {
    return releaseNote(e, oscillator);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map