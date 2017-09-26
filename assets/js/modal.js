"use strict";

import  IrtData from './irt.js';
import '../css/modal.scss';

const ModalReport = class modalReportClass {
	constructor(colorTheme, irtButton, reportBlock) {
		this.colorTheme = colorTheme;
		this.irtButton = irtButton;
		this.reportBlock = reportBlock;
		this.popup = "";
	}

	createPopup(img,irtButton, reportBlock) {

		const popupData = {
			headerTitle: "Check screen before submit",
			screenSubmitButtonText: "Send",
			closePopupButtonText: "Cancel"
		};

		const closeIcon = `<svg class="icon-close" viewBox="0 0 20 20">
							<path fill="${this.colorTheme}" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						</svg>`;

		this.popup  = document.createElement("div");
		this.popup.id = "reportPopupContent";
		this.popup.className = 'report-popup-wrapper';

		const popupHeader =  document.createElement("h2");
		popupHeader.innerHTML = popupData.headerTitle;
		this.popup.appendChild(popupHeader);

		const closeLink = document.createElement("a");
		closeLink.className = "report-popup-close";
		closeLink.innerHTML = closeIcon;
		closeLink.addEventListener("click", (event) => {
			this.closeModal();
		});
		this.popup.appendChild(closeLink);

		const popupImgContainer = document.createElement("div");
		popupImgContainer.className = "report-popup-body";
		popupImgContainer.style.borderColor = this.colorTheme;
		popupImgContainer.appendChild(img);
		this.popup.appendChild(popupImgContainer);

		const popupFooter = document.createElement("div");
		popupFooter.className = "report-popup-footer";
		const closePopupButton = document.createElement("a");
		closePopupButton.className = "report-popup-cancel";
		closePopupButton.innerHTML = popupData.closePopupButtonText;
		closePopupButton.addEventListener("click", (event) => {
			this.closeModal();
		});

		const screenSubmitButton = document.createElement("button");
		screenSubmitButton.className = "report-popup-submit";
		screenSubmitButton.style.background = this.colorTheme;
		screenSubmitButton.innerHTML = popupData.screenSubmitButtonText;
		screenSubmitButton.addEventListener("click", (event) => {
			sessionStorage.setItem('sendScreen', true);
			this.closeModal();
		});

		popupFooter.appendChild(closePopupButton);
		popupFooter.appendChild(screenSubmitButton);
		this.popup.appendChild(popupFooter);

		document.body.appendChild(this.popup);

	}

	closeModal() {
		const irtDataNew = new IrtData(IssueReportingToolObject, true).drawButton();
		document.body.removeChild(this.popup);
	}
};

export default ModalReport;
