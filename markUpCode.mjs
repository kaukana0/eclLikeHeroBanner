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

  static getHtml(height, gradientStyle) {

		const gradientStyleDef = {
			"default":"linear-gradient(125deg, #082b7a 35%, #00E9FF 75%)",
			"alt1":"linear-gradient(125deg, #082b7a 35%, #AFDFE9 75%, white 100%)"
		}

    let retVal = `
		<div id="stripe" style="height: ${height}; display:flex; justify-content: space-between; align-items: center; background: url('./components/eclLikeHeroBanner/img/banner-graphical-element.svg') 80%/contain no-repeat, ${gradientStyleDef[gradientStyle]};">
			<div id="texts" style="color:white; align-self: center;">
				<p id="title" style="margin:0px 0px 0px 35px;"></p>
				<p id="subtitle" style="margin:0px 0px 0px 35px;"></p>
			</div>
			<img id="image" src="./components/eclLikeHeroBanner/img/estat-logo-horizontal.svg" style="display:none; width:163.11px; height:22px; margin-right:10px; cursor:pointer;" tabindex="0" alt="Home - Eurostat" aria-label="Home - Eurostat" />
		</div>

		<style>
			#texts {
				--font-title-size-base: 		47px;
				--font-subtitle-size-base: 	24px;

				--font-title-size-reduction1: 	 calc(var(--font-title-size-base) - 10px);
				--font-subtitle-size-reduction1: calc(var(--font-subtitle-size-base) - 10px);

				--font-title-size-reduction2: 	 calc(var(--font-title-size-base) - 17px);
				--font-subtitle-size-reduction2: calc(var(--font-subtitle-size-base) - 12px);
			}

			#title {  
				color: #F3F6FC;  
				font-size: var(--font-title-size-base);
				font-weight: bold;
				line-height: 1.2;
			}
			#subtitle {
				color: #F3F6FC;
				font-size: var(--font-subtitle-size-base);
				font-weight: 400;
				line-height: 1.2;
			}
			@media (max-width:1200px) {
				#stripe {
					/*no stripe*/
					background: ${gradientStyleDef[gradientStyle]} !important;
				}
			}
			@media (max-width:777px) {
				#title {
					font-size: var(--font-title-size-reduction1);
					/*line-height: 1.7em;*/
				}
				#subtitle {
					font-size: var(--font-subtitle-size-reduction1);
					/*line-height: 1.7em;*/
				}
			}
			@media (max-width:540px) {
				#title {
					/*font-size: 1em;
					line-height: 1.2em;*/
				}
				img {
					display: none !important;
				}
			}

			@media (max-width:360px) {
				#title {
					font-size: var(--font-title-size-reduction2);
					/*line-height: 1.7em;*/
				}
				#subtitle {
					font-size: var(--font-subtitle-size-reduction2);
					/*line-height: 1.7em;*/
				}
			}

			</style>
    `
    return retVal
  }

}