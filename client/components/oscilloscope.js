const waveform = new Tone.Waveform(1024);

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
    waveContext.moveTo(0, (values[0] / 255) * canvasHeight);
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

    waveContext.canvas.height = canvasHeight;
    //make the gradient
    waveformGradient = waveContext.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    waveformGradient.addColorStop(0, "#ddd");
    waveformGradient.addColorStop(1, "#000");
}
sizeCanvases();
$(window).resize(sizeCanvases);
function loop() {
    requestAnimationFrame(loop);

    //get the waveform valeus and draw it
    var waveformValues = waveform.getValue();
    drawWaveform(waveformValues);
}
loop();

module.exports = {
    waveform
}