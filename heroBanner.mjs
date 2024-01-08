import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {

	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.getHtml()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
		this.shadowRoot.getElementById("image").addEventListener("click", e=>{
			window.open('https://ec.europa.eu/eurostat','_self')
		})
		this.shadowRoot.getElementById("image").addEventListener("keyup", e=>{
			if(e.key=="Enter") {
				window.open('https://ec.europa.eu/eurostat','_self')
			}
		})
	}

	static get observedAttributes() { return ["text"] }

	attributeChangedCallback(name, oldVal, newVal) {
		if(name==="text") {
			this.shadowRoot.getElementById("title").innerHTML = newVal
		}
	}

}

window.customElements.define('ecl-like-hero-banner', Element)
