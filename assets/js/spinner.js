"use strict";

import '../css/spinner.scss';

const Spinner = class SpinnerClass {
	constructor(colorTheme) {
		this.colorTheme = colorTheme;
	}

	createTemplate() {
		let spinnerTemplate = document.createElement("div");
		spinnerTemplate.className = 'sk-circle';
		spinnerTemplate.setAttribute("data-html2canvas-ignore", "true");

		let spinnerInnerHtml = function() {
           let templ = '';
           for (let i = 0; i < 12; i++) {
			   templ += '<div class="sk-circle' + (i + 1) + ' sk-child"></div>'
		   }
		   return templ;
		};
		spinnerTemplate.innerHTML = spinnerInnerHtml();
		return spinnerTemplate;
	}

};
let SpinnerRender = new Spinner;
export default SpinnerRender;
