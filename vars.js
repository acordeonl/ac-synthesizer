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

dry.gain.value = 1.3;
wet.gain.value = 1.35;
trebleVolume.gain.value = 1;

compressor.attack=5 ;
compressor.release=5 ;
biquadFilter.type = "lowpass";
biquadFilter.frequency.value = 8500;
trebleVolume.connect(dry) ;
trebleVolume.connect(convolver);
convolver.connect(wet);
dry.connect(compressor);
wet.connect(compressor);
compressor.connect(biquadFilter);
biquadFilter.connect(context.destination) ;
