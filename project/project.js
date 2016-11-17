"use strict"
import can from "can";
import "mootools-more";
import template from "steal-paths/project.stache!";

let myControl = can.Control.extend({
	defaults: {}
}, {
	init(el, options) {
		let view = can.stache(template);
		el[0].appendChild(view());
	}
});

new myControl("#start", {});
