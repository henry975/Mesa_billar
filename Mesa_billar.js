(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mesa_billar_atlas_1", frames: [[0,404,68,75],[0,144,128,128],[0,481,38,75],[130,144,128,128],[40,481,38,75],[144,0,128,128],[70,404,38,75],[0,0,142,142],[80,481,38,75],[260,130,128,128],[110,404,38,75],[274,0,128,128],[120,481,38,75],[260,260,128,128],[150,404,38,75],[0,274,128,128],[160,481,38,75],[130,274,128,128],[190,404,38,75],[260,390,128,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Mesa_billar_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mesa_billar = function() {
	this.initialize(img.mesa_billar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2816,1536);


(lib.palo = function() {
	this.initialize(img.palo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2816,1536);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Grafico_taco = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.palo();
	this.instance.setTransform(0,0,0.162,0.2383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_taco, new cjs.Rectangle(0,0,456.2,366), null);


(lib.Grafico_BolaVino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(15.8,11.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaVino, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaVerdeObscuro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(21.4,12,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaVerdeObscuro, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaVerdeClaro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(21.35,12,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaVerdeClaro, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaRoja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(26.1,14.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaRoja, new cjs.Rectangle(0,0,71,71), null);


(lib.Grafico_BolaNegro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(22,10.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaNegro, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaNaranja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(23.3,11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaNaranja, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaMorada = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(22.65,11.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaMorada, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaCafe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(23,11.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaCafe, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaBlanca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiDjQhdhegBiFQABiEBdheQBehdCEgBQCFABBeBdQBeBegBCEQABCFheBeQheBeiFgBQiEABheheg");
	this.shape.setTransform(32.05,32.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaBlanca, new cjs.Rectangle(0,0,64.1,64.1), null);


(lib.Grafico_BolaAzul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(24.35,11.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaAzul, new cjs.Rectangle(0,0,64,64), null);


(lib.Grafico_BolaAmarillo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(22.3,11.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grafico_BolaAmarillo, new cjs.Rectangle(0,0,64,64), null);


// stage content:
(lib.Mesa_billar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [29];
	// timeline functions:
	this.frame_29 = function() {
		playSound("Sonido_billarchoque");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(31));

	// Taco
	this.instance = new lib.Grafico_taco();
	this.instance.setTransform(275.05,357.75,1,1,0,0,0,228.1,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:400.1,y:356.5},4).to({x:380.15,y:357.75},15).wait(41));

	// Anim_vino
	this.bola_vino = new lib.Grafico_BolaVino();
	this.bola_vino.name = "bola_vino";
	this.bola_vino.setTransform(1011.4,453.25,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_vino).wait(29).to({x:1142.95,y:523.15},30).wait(1));

	// Anim_cafe
	this.bola_cafe = new lib.Grafico_BolaCafe();
	this.bola_cafe.name = "bola_cafe";
	this.bola_cafe.setTransform(1011.4,389.25,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_cafe).wait(29).to({x:1098.75,y:433.45},30).wait(1));

	// Anim_verdeclaro
	this.bola_verdeclaro = new lib.Grafico_BolaVerdeClaro();
	this.bola_verdeclaro.name = "bola_verdeclaro";
	this.bola_verdeclaro.setTransform(1011.4,325.25,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_verdeclaro).wait(29).to({x:1150.15,y:341.7},30).wait(1));

	// Anim_naranja
	this.bola_naranja = new lib.Grafico_BolaNaranja();
	this.bola_naranja.name = "bola_naranja";
	this.bola_naranja.setTransform(1011.4,261.25,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_naranja).wait(29).to({x:1108,y:206.75},30).wait(1));

	// Anim_negro
	this.bola_negro = new lib.Grafico_BolaNegro();
	this.bola_negro.name = "bola_negro";
	this.bola_negro.setTransform(955.15,357.6,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_negro).wait(29).to({x:1052.75},30).wait(1));

	// Anim_verdeobscuro
	this.bola_verdeobscuro = new lib.Grafico_BolaVerdeObscuro();
	this.bola_verdeobscuro.name = "bola_verdeobscuro";
	this.bola_verdeobscuro.setTransform(955.15,421.6,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_verdeobscuro).wait(29).to({x:988.75,y:523.15},30).wait(1));

	// Anim_morado
	this.bola_morada = new lib.Grafico_BolaMorada();
	this.bola_morada.name = "bola_morada";
	this.bola_morada.setTransform(955.15,293.6,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_morada).wait(29).to({x:1027.1,y:270.75},30).wait(1));

	// Anim_azul
	this.bola_azul = new lib.Grafico_BolaAzul();
	this.bola_azul.name = "bola_azul";
	this.bola_azul.setTransform(899.2,389.25,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_azul).wait(29).to({x:1004,y:433.45},30).wait(1));

	// Anim_amarillo
	this.bola_amarillo = new lib.Grafico_BolaAmarillo();
	this.bola_amarillo.name = "bola_amarillo";
	this.bola_amarillo.setTransform(843.05,357.6,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.bola_amarillo).wait(29).to({x:912.95,y:399.7},30).wait(1));

	// Anim_blanca
	this.bola_blanca = new lib.Grafico_BolaBlanca();
	this.bola_blanca.name = "bola_blanca";
	this.bola_blanca.setTransform(641.05,357.6,0.9984,0.9984,0,0,0,32.1,32.1);

	this.timeline.addTween(cjs.Tween.get(this.bola_blanca).wait(4).to({x:779.1,y:357.65},25).to({x:675.25,y:459.2},30).wait(1));

	// Anim_roja
	this.bola_roja = new lib.Grafico_BolaRoja();
	this.bola_roja.name = "bola_roja";
	this.bola_roja.setTransform(899.25,325.3,0.9001,0.9001,0,0,0,35.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.bola_roja).wait(29).to({x:963.15,y:293.65},30).wait(1));

	// Mesa
	this.instance_1 = new lib.mesa_billar();
	this.instance_1.setTransform(172,61,0.4037,0.3858);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(687,421,621.8,232.60000000000002);
// library properties:
lib.properties = {
	id: 'A6A9966B9DF5FC479FE022C9160EC6AB',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mesa_billar.png?1765836810684", id:"mesa_billar"},
		{src:"images/palo.png?1765836810684", id:"palo"},
		{src:"images/Mesa_billar_atlas_1.png?1765836810620", id:"Mesa_billar_atlas_1"},
		{src:"sounds/Sonido_billarchoque.mp3?1765836810684", id:"Sonido_billarchoque"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6A9966B9DF5FC479FE022C9160EC6AB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;