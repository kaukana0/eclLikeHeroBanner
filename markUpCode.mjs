/*
all HTML and CSS as JS string
*/

export default class MarkUpCode {

	// helper
	static getHtmlTemplate(source) {
		const t = document.createElement('template')
		t.innerHTML = source
		return t.content
	}

  static getHtml(title, subtitle) {
    let retVal = `
		<div id="stripe" style="height: 90px; display:flex; justify-content: space-between; background: url('./components/eclLikeHeroBanner/img/banner-graphical-element.svg') 80%/contain no-repeat, linear-gradient(125deg, #082b7a 35%, #AFDFE9 75%, white 100%);">
			<div style="color:white; align-self: center;">
				<p id="title" style="font-weight: 700; margin:0px 0px 0px 35px;">${title}</p>
				<p id="subtitle" style="font-weight: 400; font-size:16px; margin:0px 0px 0px 35px;"></p>
			</div>
			<img id="image" src="./components/eclLikeHeroBanner/img/estat-logo-horizontal.svg" style="width:163.11px; height:22px; margin-right:10px; margin-top:37px; cursor:pointer;" tabindex="0" alt="Home - Eurostat" aria-label="Home - Eurostat" />
		</div>
		<style>
			p {
				font-size: 38.4px;
				line-height: 38.4px;
			}
			@media (max-width:1200px) {
				#stripe {
					/*no stripe*/
					background: linear-gradient(125deg, #082b7a 35%, #AFDFE9 75%, white 100%) !important;
				}
			}
			@media (max-width:777px) {
				p {
					font-size: 1.5em;
					line-height: 1.7em;
				}
			}
			@media (max-width:540px) {
				p {
					/*font-size: 1em;
					line-height: 1.2em;*/
				}
				img {
					display: none;
				}
			}
		</style>
    `
    return retVal
  }

}