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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = new Tone.Volume({
    volume: 0,
    mute: false
});

module.exports = volume;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bassSequencer = new Nexus.Sequencer('#bassSequencer', {
    size: [800, 350],
    mode: 'toggle',
    rows: 14,
    columns: 32
});

//SEQUENCER COLOR OPTIONS
bassSequencer.colorize("accent", "#0D86BA");
bassSequencer.colorize('fill', "#363a3a");

var bassLoop = [["C1", '8n'], ['D1', '8n'], ['E1', '8n'], ['F1', '8n'], ['G1', '8n'], ['A1', '8n'], ['B1', '8n'], ["C2", '8n'], ['D2', '8n'], ['E2', '8n'], ['F2', '8n'], ['G2', '8n'], ['A2', '8n'], ['B2', '8n']];

var bassSynth = new Tone.MonoSynth((_ref = {
    "volume": 7,
    filter: {
        Q: 2,
        type: "lowshelf",
        frequency: 200,
        gain: -24
    }
}, _defineProperty(_ref, 'filter', {
    type: "lowpass",
    Q: 7,
    frequency: 10000,
    gain: -24
}), _defineProperty(_ref, "envelope", {
    "attack": 0.001,
    "decay": 1,
    "sustain": 0.4,
    "release": 0.1
}), _defineProperty(_ref, "filterEnvelope", {
    "attack": 0.001,
    "decay": 0.31,
    "sustain": 1,
    "baseFrequency": 150,
    "octaves": 2.6
}), _ref));

module.exports = { bassSequencer: bassSequencer, bassLoop: bassLoop, bassSynth: bassSynth };

/***/ }),
/* 2 */
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

chorusDelayTime.colorize("accent", "#FFE066");
chorusDelayTime.colorize('fill', "#363a3a");
chorusWet.colorize("accent", "#FFE066");
chorusWet.colorize('fill', "#363a3a");
chorusFeedback.colorize("accent", "#FFE066");
chorusFeedback.colorize('fill', "#363a3a");
chorusDepth.colorize("accent", "#FFE066");
chorusDepth.colorize('fill', "#363a3a");

module.exports = {
    chorus: chorus,
    chorusDelayTime: chorusDelayTime,
    chorusWet: chorusWet,
    chorusFeedback: chorusFeedback,
    chorusDepth: chorusDepth
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delay = new Tone.PingPongDelay({
    delayTime: '8n',
    feedback: 0.0,
    wet: 0.0
});

var delayFeedbackDial = new Nexus.Slider('#delayFeedbackDiv');
var delayWetDial = new Nexus.Slider('#delayWetDiv');

delayFeedbackDial.colorize("accent", "#FFE066");
delayFeedbackDial.colorize('fill', "#363a3a");
delayWetDial.colorize("accent", "#FFE066");
delayWetDial.colorize('fill', "#363a3a");

module.exports = {
    delay: delay,
    delayFeedbackDial: delayFeedbackDial,
    delayWetDial: delayWetDial
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attackDial = new Nexus.Slider('#attackDial');
var decayDial = new Nexus.Slider('#decayDial');
var sustainDial = new Nexus.Slider('#sustainDial');
var releaseDial = new Nexus.Slider('#releaseDial');

attackDial.colorize("accent", "#FFE066");
attackDial.colorize('fill', "#363a3a");
decayDial.colorize("accent", "#FFE066");
decayDial.colorize('fill', "#363a3a");
sustainDial.colorize("accent", "#FFE066");
sustainDial.colorize('fill', "#363a3a");
releaseDial.colorize("accent", "#FFE066");
releaseDial.colorize('fill', "#363a3a");

module.exports = {
    attackDial: attackDial,
    decayDial: decayDial,
    sustainDial: sustainDial,
    releaseDial: releaseDial
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var distortion = new Tone.Distortion({
    distortion: 0, // 0 to 1;
    oversample: "none"
});

var distortionSlider = new Nexus.Slider('#distortionSlider');

distortionSlider.on('change', function (val) {

    distortion.distortion = val;
    console.log(distortion.distortion);
});

distortionSlider.colorize("accent", "#0D86BA");
distortionSlider.colorize('fill', "#363a3a");

module.exports = { distortion: distortion, distortionSlider: distortionSlider };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(12),
    reverb = _require.reverb,
    reverbRoomSizeSlider = _require.reverbRoomSizeSlider;

var drumVolume = __webpack_require__(0);

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
}).chain(reverb, drumVolume, Tone.Master);

var drumSequencer = new Nexus.Sequencer('#drumMachine', {
    'size': [800, 200],
    'mode': 'toggle',
    'rows': 9,
    'columns': 32
});

var drumVolumeSlider = new Nexus.Slider('#drumVolumeSlider', {
    min: -64,
    max: 6
});

drumVolumeSlider.on('change', function (val) {
    drumVolume.volume.value = val;
});

var drumMuteButton = new Nexus.RadioButton('#drumMuteButton', {
    'numberOfButtons': 1
});

drumMuteButton.on('change', function (val) {
    if (val === 0) drumVolume.mute = true;else drumVolume.mute = false;
});

drumSequencer.colorize("accent", "#D81135");
drumSequencer.colorize('fill', "#363a3a");

drumVolumeSlider.colorize("accent", "#D81135");
drumVolumeSlider.colorize('fill', "#363a3a");
drumMuteButton.colorize("accent", "#D81135");
drumMuteButton.colorize('fill', "#363a3a");

module.exports = { drums: drums, drumSequencer: drumSequencer, drumVolume: drumVolume };

/***/ }),
/* 7 */
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
/* 8 */
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

module.exports = { oscillator: oscillator };

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//SYNTH SEQUENCER MATRIX
var sequencer = new Nexus.Sequencer("#sequencer", {
    'size': [800, 350],
    'mode': 'toggle',
    'rows': 14,
    'columns': 32
});

//SEQUENCER COLOR OPTIONS
sequencer.colorize("accent", "#FFE066");
sequencer.colorize('fill', "#363a3a");

//INVERTED BPM SLIDER

//NOTES IN THE SEQUENCER MATRIX
var loop = [["C3", '8n'], ['D3', '8n'], ['E3', '8n'], ['F3', '8n'], ['G3', '8n'], ['A3', '8n'], ['B3', '8n'], ["C4", '8n'], ['D4', '8n'], ['E4', '8n'], ['F4', '8n'], ['G4', '8n'], ['A4', '8n'], ['B4', '8n']];

//SYNTH SEQUENCER START/STOP BUTTON


module.exports = {
    loop: loop,
    sequencer: sequencer
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reverb = new Tone.Freeverb({
    roomSize: 0,
    dampening: 3000
});

var reverbRoomSizeSlider = new Nexus.Slider('#reverbRoomSizeSlider');

reverbRoomSizeSlider.on('change', function (val) {
    console.log(reverb.roomSize.value);
    reverb.roomSize.value = val;
});

reverbRoomSizeSlider.colorize("accent", "#D81135");
reverbRoomSizeSlider.colorize('fill', "#363a3a");

module.exports = { reverb: reverb, reverbRoomSizeSlider: reverbRoomSizeSlider };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    attackDial = _require.attackDial,
    decayDial = _require.decayDial,
    sustainDial = _require.sustainDial,
    releaseDial = _require.releaseDial;

var _require2 = __webpack_require__(5),
    distortion = _require2.distortion,
    distortionSlider = _require2.distortionSlider;

var _require3 = __webpack_require__(3),
    delay = _require3.delay,
    delayFeedbackDial = _require3.delayFeedbackDial,
    delayWetDial = _require3.delayWetDial;

var _require4 = __webpack_require__(8),
    oscillator = _require4.oscillator;

var _require5 = __webpack_require__(9),
    waveform = _require5.waveform,
    fft = _require5.fft;

var _require6 = __webpack_require__(11),
    playNote = _require6.playNote,
    releaseNote = _require6.releaseNote;

var _require7 = __webpack_require__(10),
    sequencer = _require7.sequencer,
    loop = _require7.loop;

var _require8 = __webpack_require__(2),
    chorus = _require8.chorus,
    chorusDelayTime = _require8.chorusDelayTime,
    chorusWet = _require8.chorusWet,
    chorusFeedback = _require8.chorusFeedback,
    chorusDepth = _require8.chorusDepth;

var _require9 = __webpack_require__(6),
    drums = _require9.drums,
    drumSequencer = _require9.drumSequencer;

var envelope = __webpack_require__(7);
var bassVolume = __webpack_require__(0);
var synthVolume = __webpack_require__(0);

var _require10 = __webpack_require__(1),
    bassSequencer = _require10.bassSequencer,
    bassLoop = _require10.bassLoop,
    bassSynth = _require10.bassSynth;
// const context = new (window.AudioContext || window.webkitAudioContext)();
// const analyser = context.createAnalyser();


//MAIN INTRUMENT CHAIN


oscillator.chain(chorus, delay, synthVolume, waveform, Tone.Master);

//GLOBAL PLAY/PAUSE CONTROLS


var globalPlayButton = document.getElementById('globalPlayButton');
var globalStopButton = document.getElementById("globalStopButton");
globalPlayButton.addEventListener('click', function (e) {
    event.preventDefault();
    Tone.Transport.start();
    [drumSequencer, bassSequencer, sequencer].forEach(function (k) {
        return k.start();
    });
});

globalStopButton.addEventListener('click', function (e) {
    event.preventDefault();
    Tone.Transport.stop();
    [drumSequencer, bassSequencer, sequencer].forEach(function (k) {
        k.stepper.value = -1;
        k.stop();
    });
});

//global tempo slider
Tone.Transport.bpm.value = 40;
var globalTempoSlider = new Nexus.Slider('#globalTempoSlider', {
    min: 60,
    max: 200
});

globalTempoSlider.on('change', function (val) {
    Tone.Transport.bpm.value = parseInt(val);
    [drumSequencer, bassSequencer, sequencer].forEach(function (k) {
        k.interval.ms(parseInt(val));
        console.log(k.interval.rate);
    });
});

//GLOBAL VOLUME CONTROLS
var globalVolumeSlider = new Nexus.Slider('#globalVolumeSlider', {
    min: -24,
    max: 6
});

globalVolumeSlider.on('change', function (val) {
    if (val === -24) Tone.Master.mute = true;
    Tone.Master.volume.value = Math.floor(val);
});

globalVolumeSlider.colorize('fill', "#363a3a");
globalTempoSlider.colorize('fill', "#363a3a");

//ALLOWS THE KEYBOARD TO PLAY THE NOTES
oscillator.playOrReleaseNote = function (note, action, visualKey) {
    if (action === 'attack') oscillator.triggerAttack(note, null, 10);else if (action === 'release') oscillator.triggerRelease(note);
};

//SYNTH VOLUME CONTROLS
var synthVolumeSlider = new Nexus.Slider('#synthVolumeSlider', {
    min: -64,
    max: 6
});

synthVolumeSlider.on('change', function (val) {
    synthVolume.volume.value = val;
});

var synthMuteButton = new Nexus.RadioButton('#synthMuteButton', {
    'numberOfButtons': 1
});

synthVolumeSlider.colorize("accent", "#FFE066");
synthVolumeSlider.colorize('fill', "#363a3a");
synthMuteButton.colorize("accent", "#FFE066");
synthMuteButton.colorize('fill', "#363a3a");

synthMuteButton.on('change', function (val) {
    if (val === 0) synthVolume.mute = true;else synthVolume.mute = false;
});

delayFeedbackDial.on('change', function (val) {
    delay.feedback.value = val;
});
delayWetDial.on('change', function (val) {
    delay.wet.value = val;
});

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

//MAIN START/STOP CONTROLS


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
//FUNCTION THAT PLAYS THE NOTES WHEN CLICKED
sequencer.on('step', function (event) {
    for (var i = 0; i <= event.length; i++) {
        if (event[i]) oscillator.triggerAttackRelease(loop[i][0], loop[i][1]);
    }
});

//BASS SYNTH STUFF

bassSynth.chain(distortion, bassVolume, Tone.Master);

bassSequencer.on('step', function (event) {
    for (var i = 0; i <= event.length; i++) {
        if (event[i]) {
            bassSynth.triggerAttackRelease(bassLoop[i][0], '16n');
        }
    }
});

var bassVolumeSlider = new Nexus.Slider('#bassVolumeSlider', {
    min: -64,
    max: 6
});

bassVolumeSlider.on('change', function (val) {
    bassVolume.volume.value = val;
});

var bassMuteButton = new Nexus.RadioButton('#bassMuteButton', {
    'numberOfButtons': 1
});

bassMuteButton.on('change', function (val) {
    if (val === 0) bassVolume.mute = true;else bassVolume.mute = false;
});

bassVolumeSlider.colorize("accent", "#0D86BA");
bassVolumeSlider.colorize('fill', "#363a3a");
bassMuteButton.colorize("accent", "#0D86BA");
bassMuteButton.colorize('fill', "#363a3a");

var instruments = ["kick0", "kick1", "kick2", "snare0", "snare1", "snare2", "hihat0", "hihat1", "hihat2"];

//DRUM MACHINE
drumSequencer.on('step', function (event) {
    for (var i = 0; i <= event.length; i++) {
        if (event[i]) {
            drums._players[instruments[i]].start();
        };
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