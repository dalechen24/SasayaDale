var Bulb = (function BulbAPI(options){
	if(options !== undefined && options !== null) {
		this.color = options.color;
		this.freq = options.freq;
	} else {
		this.color = "white";
		this.freq = 1;
	}

	this.message = function message(){
		console.log("light up...");
	}
	this.shining = function shining() {
		setTimeout(this.message, this.getFreq*1000);
	};

	this.setFreq = function setFreq(freq) {
		this.freq = freq;
	}
	this.getFreq = function getFreq() {
		return this.freq;
	};

	this.setColor = function setColor(color) {
		this.color = color;
	}
	this.getColor = function getColor() {
		return this.color;
	};

	return this;
});

var options = {
	color: "yellow",
	freq: 2
};

var bulb_default = Bulb();
var bulb = Bulb(options);

module("bulb test");

test("test bulb's option", function() {
	deepEqual(bulb.getColor(), "yellow", "the bulb's color is wrong");
	deepEqual(bulb.getFreq(), 2, "the bulb's frep is wrong");
});