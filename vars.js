var context = new AudioContext();
var convolver = context.createConvolver();
var dry = context.createGain();
var wet = context.createGain();
var audioGains = [];
var note = 29;
var flag = true ;

dry.gain.value = (1.0 - 0.2);
wet.gain.value = 0.2;
convolver.connect(wet);
dry.connect(context.destination);
wet.connect(context.destination);
