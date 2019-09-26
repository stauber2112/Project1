(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,43);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,40);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,110);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,27);


(lib.Bitmap14copy = function() {
	this.initialize(img.Bitmap14copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,245);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,20);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,118);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,30);// helper functions:

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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,600,500), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(0,0,501,27), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,266,110), null);


(lib.txt2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2_Layer_1, null, null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,179,118), null);


(lib.trucks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trucks, new cjs.Rectangle(0,-14,168,43), null);


(lib.suvs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.suvs, new cjs.Rectangle(0,-11,136,40), null);


(lib.Scene_1_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg_wht = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg_wht
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

}).prototype = p = new cjs.MovieClip();


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,394,20), null);


(lib.learnMore_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLCHIAAkNICXAAIAAAeIhxAAIAABWIBpAAIAAAcIhpAAIAABeIBxAAIAAAfg");
	this.shape.setTransform(233.4,14.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqCIIheh8IAAB8IgmAAIAAkNQAYgCAuAAQBcAAAABHQABAigYAWQgXAUgjAAQAHALAnAxIA1BAgAg0hqIAABdIAYABQAaAAAQgLQAUgNgBgZQAAgtg7AAg");
	this.shape_1.setTransform(209.15,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfBlQgegkAAg/QAAg8AigmQAkgqA6gBQA8AAAhAoQAeAkAAA9QAAA9giAnQgjApg7AAQg9ABgggngAhAhJQgVAdAAAsQAAAtASAdQAWAhAtAAQAoAAAZghQAVgeAAgrQAAgugTgdQgWgggtAAQgoAAgYAhg");
	this.shape_2.setTransform(179.225,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB5CHIgfjYIhKDYIglAAIhJjWIgbDWIgnAAIAokNIAtAAIBKDZIBMjZIAtAAIAoENg");
	this.shape_3.setTransform(143.8,14.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+CHIiHjZIABDZIgkAAIAAkNIAwAAICGDYIgBjYIAkAAIAAENg");
	this.shape_4.setTransform(96.45,14.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArCIIhfh8IAAB8IgmAAIAAkNQAXgCAvAAQBdAAgBBHQAAAigYAWQgWAUgjAAQAGALAoAxIA1BAgAg0hqIAABdIAYABQAaAAAQgLQAUgNAAgZQgBgtg7AAg");
	this.shape_5.setTransform(68.9,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPCHIgWg/Ih0AAIgXA/IgmAAIBlkNIAmAAIBmENgAAuArIgviDIgwCDIBfAAg");
	this.shape_6.setTransform(40.75,14.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhLCHIAAkNICXAAIAAAeIhxAAIAABWIBpAAIAAAcIhpAAIAABeIBxAAIAAAfg");
	this.shape_7.setTransform(14.7,14.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHCHIAAkNIAmAAIAADuIBpAAIAAAfg");
	this.shape_8.setTransform(-6.925,14.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnMore_Layer_1, null, null);


(lib.img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1, new cjs.Rectangle(0,0,600,500), null);


(lib.hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#637D53").s().p("Egu3ADSIAAmjMBdvAAAIAAGjg");
	this.shape.setTransform(300,21);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,42);


(lib.clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape.setTransform(300,250);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cars, new cjs.Rectangle(0,0,112,30), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.txt2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(148.5,122.5,1,1,0,0,0,148.5,122.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,297,245), null);


(lib.Scene_1_white_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white_box
	this.instance = new lib.white();
	this.instance.parent = this;
	this.instance.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:33.5},23,cjs.Ease.cubicInOut).wait(280).to({x:150},16,cjs.Ease.cubicInOut).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt4
	this.instance = new lib.txt4();
	this.instance.parent = this;
	this.instance.setTransform(149.75,75.25,0.5,0.5,0,0,0,250.5,13.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(327).to({_off:false},0).to({alpha:1},14).wait(19));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt3
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(80,64,0.5,0.5,0,0,0,133,55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(252).to({_off:false},0).to({alpha:1},9).wait(43).to({alpha:0},8).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(88,97.75,0.5,0.5,0,0,0,149,122.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).to({alpha:1},8).wait(71).to({alpha:0},9).wait(112));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(58.25,68,0.5,0.5,0,0,0,89.5,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({alpha:0},7).wait(205));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_trucks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trucks
	this.instance = new lib.trucks();
	this.instance.parent = this;
	this.instance.setTransform(47.5,124,0.5,0.5,0,0,0,56,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({x:42.5,alpha:1},7).wait(29).to({x:37.5,alpha:0},7).wait(249));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_suvs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// suvs
	this.instance = new lib.suvs();
	this.instance.parent = this;
	this.instance.setTransform(47.5,124,0.5,0.5,0,0,0,56,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({x:42.5,alpha:1},7).wait(29).to({alpha:0},7).wait(205));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(89,233.5,0.415,0.415,0,0,0,197.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(304).to({regX:197,scaleX:0.5,scaleY:0.5,x:140,y:232.5},16,cjs.Ease.cubicInOut).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(190.5,127,0.5,0.5,0,0,0,381,254);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:240.5},23,cjs.Ease.cubicInOut).to({x:290.5},296).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clicktag
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.parent = this;
	this.clicktag.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(360));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cars
	this.instance = new lib.cars();
	this.instance.parent = this;
	this.instance.setTransform(47.5,124,0.5,0.5,0,0,0,56,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({x:42.5,alpha:1},7,cjs.Ease.none).wait(29).to({x:37.5,alpha:0},7,cjs.Ease.none).wait(295));

}).prototype = p = new cjs.MovieClip();


(lib.learnMore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.learnMore_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(113.5,14.6,1,1,0,0,0,113.5,14.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnMore, new cjs.Rectangle(-19.5,-3,268.7,43.2), null);


(lib.cta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.name = "hotspot";
	this.hotspot.parent = this;
	this.hotspot.setTransform(300.55,1185.75,0.4626,1.4603,0,0,0,300.7,0.2);
	new cjs.ButtonHelper(this.hotspot, 0, 1, 2, false, new lib.hotspot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(14));

	// learnMore
	this.learnMore = new lib.learnMore();
	this.learnMore.name = "learnMore";
	this.learnMore.parent = this;
	this.learnMore.setTransform(313.25,1217.4,0.62,0.62,0,0,0,135.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.learnMore).wait(14));

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D7DCA").s().p("A1tE7IAAp1MArbAAAIAAJ1g");
	this.shape.setTransform(301.55,1215.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161.5,1184.3,279.1,63);


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.cta_btn = new lib.cta_btn();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.parent = this;
	this.cta_btn.setTransform(389.5,-264.2,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(341).to({regX:300.1,x:150.3,y:-347.65,alpha:0},0).to({alpha:1},15).wait(4));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.GM_ACP_300x250 = function(mode,startPosition,loop) {
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
		if(this.clicktag.parent == undefined || this.clicktag.parent == this)
		this.clicktag = this.clicktag.clicktag;
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
	this.frame_341 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_356 = function() {
		this.cta_btn = undefined;this.cta_btn = this.CTA.cta_btn;
	}
	this.frame_359 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(341).call(this.frame_341).wait(15).call(this.frame_356).wait(3).call(this.frame_359).wait(1));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.setTransform(390,-14.9,1,1,0,0,0,390,-14.9);
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 0
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(360));

	// clicktag_obj_
	this.clicktag = new lib.Scene_1_clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.parent = this;
	this.clicktag.setTransform(150,125,1,1,0,0,0,150,125);
	this.clicktag.depth = 0;
	this.clicktag.isAttachedToCamera = 0
	this.clicktag.isAttachedToMask = 0
	this.clicktag.layerDepth = 0
	this.clicktag.layerIndex = 1
	this.clicktag.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(360));

	// border_obj_
	this.border = new lib.Scene_1_border();
	this.border.name = "border";
	this.border.parent = this;
	this.border.setTransform(150,125,1,1,0,0,0,150,125);
	this.border.depth = 0;
	this.border.isAttachedToCamera = 0
	this.border.isAttachedToMask = 0
	this.border.layerDepth = 0
	this.border.layerIndex = 2
	this.border.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.border).wait(360));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(88.9,233.5,1,1,0,0,0,88.9,233.5);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 3
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(360));

	// txt4_obj_
	this.txt4 = new lib.Scene_1_txt4();
	this.txt4.name = "txt4";
	this.txt4.parent = this;
	this.txt4.depth = 0;
	this.txt4.isAttachedToCamera = 0
	this.txt4.isAttachedToMask = 0
	this.txt4.layerDepth = 0
	this.txt4.layerIndex = 4
	this.txt4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(360));

	// txt3_obj_
	this.txt3 = new lib.Scene_1_txt3();
	this.txt3.name = "txt3";
	this.txt3.parent = this;
	this.txt3.depth = 0;
	this.txt3.isAttachedToCamera = 0
	this.txt3.isAttachedToMask = 0
	this.txt3.layerDepth = 0
	this.txt3.layerIndex = 5
	this.txt3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(360));

	// txt2_obj_
	this.txt2 = new lib.Scene_1_txt2();
	this.txt2.name = "txt2";
	this.txt2.parent = this;
	this.txt2.depth = 0;
	this.txt2.isAttachedToCamera = 0
	this.txt2.isAttachedToMask = 0
	this.txt2.layerDepth = 0
	this.txt2.layerIndex = 6
	this.txt2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(360));

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

	this.timeline.addTween(cjs.Tween.get(this.suvs).wait(360));

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

	this.timeline.addTween(cjs.Tween.get(this.trucks).wait(360));

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

	this.timeline.addTween(cjs.Tween.get(this.cars).wait(360));

	// txt1_obj_
	this.txt1 = new lib.Scene_1_txt1();
	this.txt1.name = "txt1";
	this.txt1.parent = this;
	this.txt1.setTransform(58.2,68,1,1,0,0,0,58.2,68);
	this.txt1.depth = 0;
	this.txt1.isAttachedToCamera = 0
	this.txt1.isAttachedToMask = 0
	this.txt1.layerDepth = 0
	this.txt1.layerIndex = 10
	this.txt1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(360));

	// white_box_obj_
	this.white_box = new lib.Scene_1_white_box();
	this.white_box.name = "white_box";
	this.white_box.parent = this;
	this.white_box.depth = 0;
	this.white_box.isAttachedToCamera = 0
	this.white_box.isAttachedToMask = 0
	this.white_box.layerDepth = 0
	this.white_box.layerIndex = 11
	this.white_box.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.white_box).wait(360));

	// img1_obj_
	this.img1 = new lib.Scene_1_img1();
	this.img1.name = "img1";
	this.img1.parent = this;
	this.img1.depth = 0;
	this.img1.isAttachedToCamera = 0
	this.img1.isAttachedToMask = 0
	this.img1.layerDepth = 0
	this.img1.layerIndex = 12
	this.img1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.img1).wait(360));

	// bg_wht_obj_
	this.bg_wht = new lib.Scene_1_bg_wht();
	this.bg_wht.name = "bg_wht";
	this.bg_wht.parent = this;
	this.bg_wht.setTransform(150,125,1,1,0,0,0,150,125);
	this.bg_wht.depth = 0;
	this.bg_wht.isAttachedToCamera = 0
	this.bg_wht.isAttachedToMask = 0
	this.bg_wht.layerDepth = 0
	this.bg_wht.layerIndex = 13
	this.bg_wht.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg_wht).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,124.5,426.3,126);
// library properties:
lib.properties = {
	id: 'BA3A2268EC264DC28B078EBFA7F23889',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap10.png?1568344989018", id:"Bitmap10"},
		{src:"Bitmap11.png?1568344989018", id:"Bitmap11"},
		{src:"Bitmap13.png?1568344989018", id:"Bitmap13"},
		{src:"Bitmap14.png?1568344989018", id:"Bitmap14"},
		{src:"Bitmap14copy.png?1568344989018", id:"Bitmap14copy"},
		{src:"Bitmap15.png?1568344989018", id:"Bitmap15"},
		{src:"Bitmap6.jpg?1568344989018", id:"Bitmap6"},
		{src:"Bitmap7.png?1568344989018", id:"Bitmap7"},
		{src:"Bitmap8.png?1568344989018", id:"Bitmap8"}
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
an.compositions['BA3A2268EC264DC28B078EBFA7F23889'] = {
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