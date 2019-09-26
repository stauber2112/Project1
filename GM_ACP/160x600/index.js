(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1202,425,301],[1442,0,320,1201],[1557,1264,288,24],[1305,1203,250,170],[609,1331,265,52],[1557,1203,119,59],[0,0,1440,1200],[609,1266,278,63],[427,1203,876,61],[1678,1203,131,23],[1115,1320,154,63],[889,1266,174,59],[1065,1266,197,52],[876,1331,237,52],[427,1266,180,126],[1271,1375,402,20]]}
];


// symbols:



(lib.background = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_852 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_853 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_854 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_855 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_856 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_857 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_858 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_859 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_860 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_861 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_862 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_863 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_864 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_865 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.yeswebuild_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_865();
	this.instance.parent = this;
	this.instance.setTransform(-16.05,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yeswebuild_Layer_1, null, null);


(lib.we_build_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_864();
	this.instance.parent = this;
	this.instance.setTransform(-15.85,82);

	this.instance_1 = new lib.CachedTexturedBitmap_863();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.3,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.we_build_Layer_1, null, null);


(lib.trucks_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_862();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,86.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trucks_Layer_1, null, null);


(lib.suvs_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_861();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,84.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.suvs_Layer_1, null, null);


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(16,579,0.321,0.3199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(421));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.instance = new lib.CachedTexturedBitmap_852();
	this.instance.parent = this;
	this.instance.setTransform(-0.25,-0.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(421));

}).prototype = p = new cjs.MovieClip();


(lib.learnMore_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_860();
	this.instance.parent = this;
	this.instance.setTransform(5,1.35,1.6129,1.6129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnMore_Layer_1, null, null);


(lib.image_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.image_Layer_1, null, null);


(lib.hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_859();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6848,0.6848);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,599.9,41.8);


(lib.cta_btn_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// green
	this.instance = new lib.CachedTexturedBitmap_858();
	this.instance.parent = this;
	this.instance.setTransform(162.55,1184.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

}).prototype = p = new cjs.MovieClip();


(lib.clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_857();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4167,0.4167);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cars_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_856();
	this.instance.parent = this;
	this.instance.setTransform(-14.65,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cars_Layer_1, null, null);


(lib.butwhatwe_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_855();
	this.instance.parent = this;
	this.instance.setTransform(-15.35,202.1);

	this.instance_1 = new lib.CachedTexturedBitmap_854();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.35,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butwhatwe_Layer_1, null, null);


(lib.buildingmoments_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_853();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-311.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.buildingmoments_Layer_1, null, null);


(lib.yeswebuild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.yeswebuild_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(74,87.8,1,1,0,0,0,74,87.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.yeswebuild, new cjs.Rectangle(-16,24.8,180,126.00000000000001), null);


(lib.webuild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.we_build_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(102.7,78.8,1,1,0,0,0,102.7,78.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.webuild, new cjs.Rectangle(-15.8,23.5,237,110.5), null);


(lib.trucks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.trucks_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(73.6,116.4,1,1,0,0,0,73.6,116.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.trucks, new cjs.Rectangle(-13.4,86.9,174,59), null);


(lib.suvs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.suvs_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(61.7,115.6,1,1,0,0,0,61.7,115.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.suvs, new cjs.Rectangle(-15.3,84.1,154,63), null);


(lib.Scene_1_yes_we_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yes_we_build
	this.instance = new lib.yeswebuild();
	this.instance.parent = this;
	this.instance.setTransform(107.4,274.25,0.5,0.5,0,0,0,172.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(239));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_we_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// we_build
	this.instance = new lib.webuild();
	this.instance.parent = this;
	this.instance.setTransform(81.3,274.25,0.5,0.5,0,0,0,120.7,31.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280).to({_off:false},0).to({alpha:1},12,cjs.Ease.cubicOut).wait(47).to({alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(71));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_trucks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trucks
	this.instance = new lib.trucks();
	this.instance.parent = this;
	this.instance.setTransform(72.55,310.2,0.5,0.5,0,0,0,92.9,31.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({x:67.55,alpha:1},10,cjs.Ease.cubicOut).wait(32).to({x:62.55,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(300));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_suvs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// suvs
	this.instance = new lib.suvs();
	this.instance.parent = this;
	this.instance.setTransform(65,310.1,0.5,0.5,0,0,0,78.2,31.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({x:60,alpha:1},11,cjs.Ease.cubicOut).wait(33).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(239));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clickthru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clickthru
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.parent = this;
	this.clicktag.setTransform(80,300,0.2667,1.2,0,0,0,300,250);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(440));

}).prototype = p = new cjs.MovieClip();


(lib.learnMore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.learnMore_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(110.7,19.9,1,1,0,0,0,110.7,19.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnMore, new cjs.Rectangle(5,1.4,211.3,37.1), null);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.image_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(212.5,150.5,1,1,0,0,0,212.5,150.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.image, new cjs.Rectangle(0,0,425,301), null);


(lib.cta_btn_learnMore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// learnMore
	this.learnMore = new lib.learnMore();
	this.learnMore.name = "learnMore";
	this.learnMore.parent = this;
	this.learnMore.setTransform(313.25,1217.4,0.62,0.62,0,0,0,135.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.learnMore).wait(14));

}).prototype = p = new cjs.MovieClip();


(lib.cta_btn_hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.name = "hotspot";
	this.hotspot.parent = this;
	this.hotspot.setTransform(300.55,1185.75,0.4626,1.4603,0,0,0,300.7,0.2);
	new cjs.ButtonHelper(this.hotspot, 0, 1, 2, false, new lib.hotspot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(14));

}).prototype = p = new cjs.MovieClip();


(lib.cta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:8});

	// timeline functions:
	this.frame_0 = function() {
		if(this.hotspot.parent == undefined || this.hotspot.parent == this)
		this.hotspot = this.hotspot.hotspot;
		if(this.learnMore.parent == undefined || this.learnMore.parent == this)
		this.learnMore = this.learnMore.learnMore;
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(6).call(this.frame_13).wait(1));

	// hotspot_obj_
	this.hotspot = new lib.cta_btn_hotspot();
	this.hotspot.name = "hotspot";
	this.hotspot.parent = this;
	this.hotspot.setTransform(300.2,1215.9,1,1,0,0,0,300.2,1215.9);
	this.hotspot.depth = 0;
	this.hotspot.isAttachedToCamera = 0
	this.hotspot.isAttachedToMask = 0
	this.hotspot.layerDepth = 0
	this.hotspot.layerIndex = 0
	this.hotspot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(14));

	// learnMore_obj_
	this.learnMore = new lib.cta_btn_learnMore();
	this.learnMore.name = "learnMore";
	this.learnMore.parent = this;
	this.learnMore.setTransform(298.1,1217.9,1,1,0,0,0,298.1,1217.9);
	this.learnMore.depth = 0;
	this.learnMore.isAttachedToCamera = 0
	this.learnMore.isAttachedToMask = 0
	this.learnMore.layerDepth = 0
	this.learnMore.layerIndex = 1
	this.learnMore.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.learnMore).wait(14));

	// green_obj_
	this.green = new lib.cta_btn_green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(301.6,1215.8,1,1,0,0,0,301.6,1215.8);
	this.green.depth = 0;
	this.green.isAttachedToCamera = 0
	this.green.isAttachedToMask = 0
	this.green.layerDepth = 0
	this.green.layerIndex = 2
	this.green.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.green).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161.5,1184.3,279.1,63);


(lib.cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.cars_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(44.9,116.2,1,1,0,0,0,44.9,116.2);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cars, new cjs.Rectangle(-14.6,86.7,119,58.999999999999986), null);


(lib.butwhatwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.butwhatwe_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(117.2,139.3,1,1,0,0,0,117.2,139.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.butwhatwe, new cjs.Rectangle(-15.3,24.5,265,229.6), null);


(lib.buildingmoments = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.buildingmoments_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(124.2,-299.9,1,1,0,0,0,124.2,-299.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.buildingmoments, new cjs.Rectangle(-19.8,-311.9,288,24), null);


(lib.Scene_1_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.image();
	this.instance.parent = this;
	this.instance.setTransform(227.1,199.2,0.8635,0.8616,0,0,0,380.4,233.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:233.7,scaleX:0.9268,scaleY:0.9248,x:227.15,y:199.15},356,cjs.Ease.cubicOut).wait(65));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.parent = this;
	this.cta_btn.setTransform(319.95,-335.3,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(362).to({x:80.45,y:-153.1,alpha:0},0).to({alpha:1},15).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cars
	this.instance = new lib.cars();
	this.instance.parent = this;
	this.instance.setTransform(57.35,310.15,0.5,0.5,0,0,0,63.7,31.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:52.8,alpha:1},10,cjs.Ease.cubicOut).wait(30).to({x:47.8,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(358));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_but_what_we_really_build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// but_what_we_really_build
	this.instance = new lib.butwhatwe();
	this.instance.parent = this;
	this.instance.setTransform(111.05,310.25,0.5,0.5,0,0,0,180.2,104.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({alpha:1},11,cjs.Ease.cubicOut).wait(67).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(144));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_building_moments = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// building_moments
	this.instance = new lib.buildingmoments();
	this.instance.parent = this;
	this.instance.setTransform(150.15,446.65,0.5,0.5,0,0,0,260.5,20.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(354).to({_off:false},0).to({alpha:1},10,cjs.Ease.cubicOut).wait(57));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.GM_ACP_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_btn = this.CTA.cta_btn;
		this.clicktag = this.clickthru.clicktag;
		stage.enableMouseOver();
		
		var root = this;
		
		//this.cta_btn.hotspot.addEventListener("mouseover", overCta.bind(this));
		//this.cta_btn.hotspot.addEventListener("mouseout", outCta.bind(this));
		//this.cta_btn.hotspot.addEventListener("mouseleave", outCta.bind(this));
		this.cta_btn.hotspot.addEventListener("click", clickCta.bind(this));
		
		this.clicktag.addEventListener("click", fl_ClickToGoToWebPage);
		
		function overCta(){
			//root.cta_btn.gotoAndPlay("over");
			
		}
		
		function outCta(){
			//root.cta_btn.gotoAndPlay("out");
		
		}
		
		function clickCta() {
			window.open(clickTag1, "_blank");	
		}
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTag, "_blank");
		}
	}
	this.frame_362 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_377 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_420 = function() {
		this.stop();
	}
	this.frame_439 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(362).call(this.frame_362).wait(15).call(this.frame_377).wait(43).call(this.frame_420).wait(19).call(this.frame_439).wait(1));

	// border_obj_
	this.border = new lib.Scene_1_border();
	this.border.name = "border";
	this.border.parent = this;
	this.border.setTransform(79.8,300,1,1,0,0,0,79.8,300);
	this.border.depth = 0;
	this.border.isAttachedToCamera = 0
	this.border.isAttachedToMask = 0
	this.border.layerDepth = 0
	this.border.layerIndex = 0
	this.border.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.border).to({_off:true},421).wait(19));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.setTransform(320.4,-86,1,1,0,0,0,320.4,-86);
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 1
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(440));

	// clickthru_obj_
	this.clickthru = new lib.Scene_1_clickthru();
	this.clickthru.name = "clickthru";
	this.clickthru.parent = this;
	this.clickthru.setTransform(80,300,1,1,0,0,0,80,300);
	this.clickthru.depth = 0;
	this.clickthru.isAttachedToCamera = 0
	this.clickthru.isAttachedToMask = 0
	this.clickthru.layerDepth = 0
	this.clickthru.layerIndex = 2
	this.clickthru.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clickthru).wait(440));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7iVGMAAAgqLMA3FAAAMAAAAqLg");
	mask.setTransform(157.4,119.25);

	// image_obj_
	this.image = new lib.Scene_1_image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(82.1,127.4,1,1,0,0,0,82.1,127.4);
	this.image.depth = 0;
	this.image.isAttachedToCamera = 0
	this.image.isAttachedToMask = 0
	this.image.layerDepth = 0
	this.image.layerIndex = 3
	this.image.maskLayerName = 0

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(356).to({_off:true},65).wait(19));

	// building_moments_obj_
	this.building_moments = new lib.Scene_1_building_moments();
	this.building_moments.name = "building_moments";
	this.building_moments.parent = this;
	this.building_moments.depth = 0;
	this.building_moments.isAttachedToCamera = 0
	this.building_moments.isAttachedToMask = 0
	this.building_moments.layerDepth = 0
	this.building_moments.layerIndex = 4
	this.building_moments.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.building_moments).wait(364).to({_off:true},57).wait(19));

	// we_build_obj_
	this.we_build = new lib.Scene_1_we_build();
	this.we_build.name = "we_build";
	this.we_build.parent = this;
	this.we_build.depth = 0;
	this.we_build.isAttachedToCamera = 0
	this.we_build.isAttachedToMask = 0
	this.we_build.layerDepth = 0
	this.we_build.layerIndex = 5
	this.we_build.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.we_build).wait(350).to({_off:true},71).wait(19));

	// but_what_we_really_build_obj_
	this.but_what_we_really_build = new lib.Scene_1_but_what_we_really_build();
	this.but_what_we_really_build.name = "but_what_we_really_build";
	this.but_what_we_really_build.parent = this;
	this.but_what_we_really_build.depth = 0;
	this.but_what_we_really_build.isAttachedToCamera = 0
	this.but_what_we_really_build.isAttachedToMask = 0
	this.but_what_we_really_build.layerDepth = 0
	this.but_what_we_really_build.layerIndex = 6
	this.but_what_we_really_build.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.but_what_we_really_build).wait(277).to({_off:true},144).wait(19));

	// suvs_obj_
	this.suvs = new lib.Scene_1_suvs();
	this.suvs.name = "suvs";
	this.suvs.parent = this;
	this.suvs.depth = 0;
	this.suvs.isAttachedToCamera = 0
	this.suvs.isAttachedToMask = 0
	this.suvs.layerDepth = 0
	this.suvs.layerIndex = 7
	this.suvs.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.suvs).wait(182).to({_off:true},239).wait(19));

	// trucks_obj_
	this.trucks = new lib.Scene_1_trucks();
	this.trucks.name = "trucks";
	this.trucks.parent = this;
	this.trucks.depth = 0;
	this.trucks.isAttachedToCamera = 0
	this.trucks.isAttachedToMask = 0
	this.trucks.layerDepth = 0
	this.trucks.layerIndex = 8
	this.trucks.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.trucks).wait(121).to({_off:true},300).wait(19));

	// cars_obj_
	this.cars = new lib.Scene_1_cars();
	this.cars.name = "cars";
	this.cars.parent = this;
	this.cars.depth = 0;
	this.cars.isAttachedToCamera = 0
	this.cars.isAttachedToMask = 0
	this.cars.layerDepth = 0
	this.cars.layerIndex = 9
	this.cars.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cars).wait(63).to({_off:true},358).wait(19));

	// yes_we_build_obj_
	this.yes_we_build = new lib.Scene_1_yes_we_build();
	this.yes_we_build.name = "yes_we_build";
	this.yes_we_build.parent = this;
	this.yes_we_build.setTransform(60.3,302.4,1,1,0,0,0,60.3,302.4);
	this.yes_we_build.depth = 0;
	this.yes_we_build.isAttachedToCamera = 0
	this.yes_we_build.isAttachedToMask = 0
	this.yes_we_build.layerDepth = 0
	this.yes_we_build.layerIndex = 10
	this.yes_we_build.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yes_we_build).wait(182).to({_off:true},239).wait(19));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(80.5,582.2,1,1,0,0,0,80.5,582.2);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 11
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).to({_off:true},421).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,284.3,329.2,315.99999999999994);
// library properties:
lib.properties = {
	id: 'CF44DD90D52846B7B8B25039D0454E41',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1568343522720", id:"index_atlas_"}
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
an.compositions['CF44DD90D52846B7B8B25039D0454E41'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;