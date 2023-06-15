import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {

	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.getHtml()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
	}

	static get observedAttributes() { return ["title"] }

	attributeChangedCallback(name, oldVal, newVal) {
		if(name==="title") {
			this.shadowRoot.getElementById("title").innerHTML = newVal
		}
	}

}

window.customElements.define('ecl-like-hero-banner', Element)
