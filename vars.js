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

dry.gain.value = (1.8);
wet.gain.value = 2;
trebleVolume.gain.value = 1;

// compressor.attack=2 ;
// compressor.release=2 ;
biquadFilter.type = "highpass";
biquadFilter.frequency.value = 0;
convolver.connect(wet);
trebleVolume.connect(dry) ;
dry.connect(compressor);
wet.connect(compressor);
compressor.connect(biquadFilter);
biquadFilter.connect(context.destination) ;
