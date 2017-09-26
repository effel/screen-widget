"use strict";

import  WidgetReport from './widget-report.js';
import '../css/main.scss';

const IrtData = class IrtDataClass {
		constructor(extraParams, activeState) {
            this.extraParams = extraParams;
			this.colorTheme = extraParams.colorTheme;
			this.activeState = activeState;
			this.options = {
				debug: false,
				server: null
			};
			this.data = {};
			this.button = null;
			this.widgetReportObj = new WidgetReport(this.colorTheme);
		}

		drawButton() {

			// try {
			// 	var irt = window['IssueReportingToolObject'] || [];
			// 	for(var i = 0; i < irt.length; i++) {
			// 		this.data[irt[i][0]] = irt.data[i][1];
			// 	}
			// } catch(e) {
			// 	console.log('Error in parameter definitions:', i);
			// }
			//
			// this.options.server = this.data.link || null;
			// if(!this.options.server) {
			// 	console.log('Server not defined');
			// 	return false;
			// } else {
			// 	delete this.data.link;
			// }

			const innerIcon = `<svg class="icon-report" viewBox="0 0 20 20">
							<path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
						</svg>`;

			const closeIcon = `<svg class="icon-close" viewBox="0 0 20 20">
							<path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						</svg>`;

			this.button = document.createElement("div");
			this.button.className = 'butn-report';
			this.button.style.background = this.colorTheme;
			this.button.setAttribute("data-tooltip", "Report a bug");
			const report = document.createTextNode("Report bug");
			this.button.innerHTML = innerIcon + closeIcon;

			let reportBlock = this.widgetReportObj.createWidgetReport(this.button);

			if (this.activeState) {
				this.widgetReportObj.setActiveState(this.button, reportBlock)
			}
			document.body.appendChild(this.button);

			this.button.addEventListener("click", (event) => {
				this.widgetReportObj.showReportBlock(this.button,reportBlock);
				event.preventDefault();
			});
			if (this.options.debug) {
				console.log('initialized');
			}
		}

	};

  const irtData = new IrtData(IssueReportingToolObject);
  irtData.drawButton();

export default IrtData;


