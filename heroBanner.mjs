import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {

	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const height = this.style.height !== "" ? this.style.height : "128px"
		const gradientStyle = this.hasAttribute("gradientstyle") ? this.getAttribute("gradientstyle") : "default"
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.getHtml(height, gradientStyle)).cloneNode(true)
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
	
	connectedCallback() {
		if(this.hasAttribute("fontTitleSizeBase")) {
			this.shadowRoot.getElementById("texts").style.setProperty('--font-title-size-base', this.getAttribute("fontTitleSizeBase"));
		}
	}



	static get observedAttributes() { return ["text", "subtitle", "showlogo"] }

	attributeChangedCallback(name, oldVal, newVal) {
		if(name==="text") {
			this.shadowRoot.getElementById("title").innerHTML = newVal
		}
		if(name==="subtitle") {
			this.shadowRoot.getElementById("subtitle").innerHTML = newVal
		}
		if(name==="showlogo") {
			this.shadowRoot.getElementById("image").style.display = newVal==="true" ? "block" : "none"
		}
	}

}

window.customElements.define('ecl-like-hero-banner', Element)
