"use strict";

import  html2canvas from 'html2canvas';
import  SpinnerRender from './spinner.js';
import  ModalReport from './modal.js';
import '../css/widget-report.scss';

const WidgetReport = class WidgetReportClass {
	constructor(colorTheme) {
		this.colorTheme = colorTheme;
	}

	createTemplate() {

		const widgetData = {
		  headerTitle: "Leave a bug report",
          login: "Effel",
		  ip: "193.238.212.333",
	      textAreaPlaceholder: "Add a comment...",
		  userLocation: "Centrs, Centra rajons, Riga, Latvia Lat : 56.95892 | Long : 24.10685",
		  sendBtnText: "Send",
          screenBtnlabel : "Take a screenshot",
		  addedScreenlabel: "Screen was added",
		  colorTheme: this.colorTheme,
		  textAreaValue: sessionStorage.getItem('reportTextValue') ? sessionStorage.getItem('reportTextValue') : ""
		};

		let mainTemplate = `<h2>${widgetData.headerTitle}</h2>
			<div class="report-block">
				<h3>
					<span class="header-left">${widgetData.login}</span>
					<span class="header-right">${widgetData.ip}</span>
					<div class="clear"></div>
				</h3>
				<div class="report-body">
					<form action="">
						<textarea  placeholder='${widgetData.textAreaPlaceholder}'>${widgetData.textAreaValue}</textarea>
						<div class="clear"></div>
						<div id="makeScreen" class="screen-block">
							<svg viewBox="0 0 20 20">
								<path fill="${this.colorTheme}" d="M10,6.536c-2.263,0-4.099,1.836-4.099,4.098S7.737,14.732,10,14.732s4.099-1.836,4.099-4.098S12.263,6.536,10,6.536M10,13.871c-1.784,0-3.235-1.453-3.235-3.237S8.216,7.399,10,7.399c1.784,0,3.235,1.452,3.235,3.235S11.784,13.871,10,13.871M17.118,5.672l-3.237,0.014L12.52,3.697c-0.082-0.105-0.209-0.168-0.343-0.168H7.824c-0.134,0-0.261,0.062-0.343,0.168L6.12,5.686H2.882c-0.951,0-1.726,0.748-1.726,1.699v7.362c0,0.951,0.774,1.725,1.726,1.725h14.236c0.951,0,1.726-0.773,1.726-1.725V7.195C18.844,6.244,18.069,5.672,17.118,5.672 M17.98,14.746c0,0.477-0.386,0.861-0.862,0.861H2.882c-0.477,0-0.863-0.385-0.863-0.861V7.384c0-0.477,0.386-0.85,0.863-0.85l3.451,0.014c0.134,0,0.261-0.062,0.343-0.168l1.361-1.989h3.926l1.361,1.989c0.082,0.105,0.209,0.168,0.343,0.168l3.451-0.014c0.477,0,0.862,0.184,0.862,0.661V14.746z"></path>
							</svg>
							<span>${widgetData.screenBtnlabel}</span>
						</div>
						<div id="screenWasAdded" class="screen-block">
                             <svg class="icon-close" viewBox="0 0 20 20">
							   <path fill="${this.colorTheme}" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						     </svg>
							<span>${widgetData.addedScreenlabel}</span>
						</div>						
						<button  style="background-color: ${this.colorTheme}" class="but-send">${widgetData.sendBtnText}</button>
						<div class="clear"></div>
					</form>
				</div>
				<div class="report-bottom">
					<div class="icon-loc">
						<svg class="svg-icon" viewBox="0 0 20 20">
							<path stroke="#fff" d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
						</svg>
					</div>
				   <div class="user-location">${widgetData.userLocation}</div>
				</div>
			</div>`

		return mainTemplate;

	}

	takeScreen(irtButton, reportBlock) {
		let dataUrl;

		let spinnerElem = SpinnerRender.createTemplate();
		document.body.appendChild(spinnerElem);

		html2canvas(document.body, {
			onrendered: (canvas) => {
				document.body.removeChild(spinnerElem);

				const ModalReportView = new ModalReport(this.colorTheme, irtButton, reportBlock);
				let img = document.createElement("img");
				img.src = canvas.toDataURL('image/jpg');
				ModalReportView.createPopup(img);
			}
		});
	}

	createWidgetReport(irtButton) {
		let reportBlock = document.createElement("div");
		reportBlock.className = 'report-wrapper';
		reportBlock.innerHTML = this.createTemplate();
		const screenWasAdded = sessionStorage.getItem('sendScreen') === "true";

		document.body.appendChild(reportBlock);

		if (reportBlock) {

			const reportTextTextArea= document.querySelector('.report-body textarea');
			let reportText = "";

			let screenCreateTrigger = () => {
				document.body.removeChild(irtButton);
				document.body.removeChild(reportBlock);
				this.takeScreen(irtButton, reportBlock);
			};

			let screenWasAddedActions = (screenTrigger, wasAddedTrigger) => {
				sessionStorage.setItem('sendScreen', false);
				screenTrigger.style.display = "block";
				wasAddedTrigger.style.display = "none";
			}

			this.triggerAddRemoveScreenBlocks(screenWasAdded, screenCreateTrigger, screenWasAddedActions);

			reportTextTextArea.addEventListener("focusout", (event) => {
				reportText = reportTextTextArea.value;
				sessionStorage.setItem('reportTextValue', reportText);
				return;
			});

		}

		return reportBlock;
	}

	showReportBlock(irtButton, reportBlock) {

		if (irtButton.classList.contains("active-button")) {
			this.setHiddenState(irtButton, reportBlock);
		} else {
            this.setActiveState(irtButton, reportBlock);
		}
	}

	setActiveState(irtButton, reportBlock) {
		irtButton.style.background = "";
		irtButton.style.borderColor = this.colorTheme;
		irtButton.classList.add("active-button");
		reportBlock.classList.add("visible");
	}

	setHiddenState(irtButton, reportBlock) {
		irtButton.style.background = this.colorTheme;
		irtButton.style.borderColor = "transparent";
		irtButton.classList.remove("active-button");
		reportBlock.classList.remove("visible");
		const reportTextTextArea = document.querySelector('.report-body textarea');
		reportTextTextArea.value = "";

		this.triggerAddRemoveScreenBlocks(false);
		sessionStorage.clear();

	}

	triggerAddRemoveScreenBlocks(state, screenCreateActions, screenWasAddedActions) {

		const screenCreateTrigger = document.getElementById("makeScreen");
		const screenWasAddedBlock = document.getElementById("screenWasAdded");

		if (state) {
			screenCreateTrigger.style.display = "none";
			screenWasAddedBlock.style.display = "block";
		} else {
			screenCreateTrigger.style.display = "block";
			screenWasAddedBlock.style.display = "none";
		};

		if (screenCreateActions && screenWasAddedActions) {
			screenCreateTrigger.addEventListener("click", (event) => {
				screenCreateActions();
			});

			screenWasAddedBlock.addEventListener("click", (event) => {
				screenWasAddedActions(screenCreateTrigger, screenWasAddedBlock);
			});
		};

	}

};

export default WidgetReport;
