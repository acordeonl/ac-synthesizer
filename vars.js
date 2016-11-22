var context = new AudioContext();
var convolver = context.createConvolver();
var dry = context.createGain();
var wet = context.createGain();
var compressor = context.createDynamicsCompressor();
var trebleVolume = context.createGain();
var biquadFilter = context.createBiquadFilter();
var audioGains = [];
var note = 29;
var flag = true ;

dry.gain.value = (1.0-0.7);
wet.gain.value = 0.35;
trebleVolume.gain.value = 1;

compressor.attack=2 ;
compressor.release=2 ;
biquadFilter.type = "lowpass";
biquadFilter.frequency.value = 7000;

convolver.connect(wet);
trebleVolume.connect(dry) ;
dry.connect(compressor);
wet.connect(compressor);
compressor.connect(biquadFilter);
biquadFilter.connect(context.destination) ;
