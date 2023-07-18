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

  static getHtml(title) {
    let retVal = `
		<div style="height: 90px; display:flex; justify-content: space-between; background: url('./components/eclLikeHeroBanner/img/banner-graphical-element.svg') 65%/contain no-repeat, linear-gradient(125deg, #082b7a 35%, #AFDFE9 75%, white 100%);">
			<p id="title" style="font-size: 38.4px; font-weight: 700; line-height: 38.4px; color:white; align-self: center; margin-left:40px;">${title}</p>
			<img src="./components/eclLikeHeroBanner/img/estat-logo-horizontal.svg" style="width:163.11px; height:22px; margin-right:10px; margin-top:37px; cursor:pointer;" onclick="window.open('https://ec.europa.eu/eurostat','_self')"/>
		</div>
    `
    return retVal
  }

}