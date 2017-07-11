const html = require('choo/html')
const themeControls = require('components/controls/themeControls')
const themePreview = require('components/themePreview')
const saveButton = require('components/controls/saveButton')

const Fairybread = require('fairybread')

function themeBuilder(state, emit) {
  const defaults = state.buildingTheme
  if (defaults !== null) {
    console.log(defaults)
    return html`
      <div className=${styles()}>
      <div className="theme_details">
      <div className="theme_title half">
          <ul>
            <li>
              ${saveButton('theme', 'buildingTheme', state, emit)}
            </li>
            <li>
                ${saveButton('suggestion', 'buildingSuggestion', state, emit)}
            </li>
          </ul>
      </div>
      <div className="half">
            ${themePreview(defaults, state, emit)}
          </div>
      </div>
          <div className="two-thirds third">
            ${themeControls(defaults, state, emit)}
          </div>
      </div>
    `
  }
}
function styles() {
  const sheet = new Fairybread('local')
  sheet.add('', `
        display:inline-block;
        text-align:center;
        padding-bottom:4em;
        max-width:100%;
      `)
  sheet.add('.theme_preview', `
        max-width:300px;
        margin: 0 auto;
      `)
  sheet.add('li', `
        display:inline-block;
        padding:0 1em;
      `)
  sheet.add('.pallet', `
    white-space: nowrap;
    overflow-x: auto;
  `)
  // Theme Builder Form
  sheet.add('.swatch', `
       padding: 1em;
      position: relative;
      display: inline-block;
      max-width: 175px;
      min-height: 40px;
      border: 1px solid;
      margin: 0px 5px 5px 0px;
      width: 27vw;
      `)
  sheet.add('.swatch label', `
        padding:1em;
        position:absolute;
        background:#000;
        bottom:0px;
        left:0px;
      `)
  sheet.add('.swatch input[type="color"]', `
          position:absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          opacity:0;
      `)

  sheet.render()
  return sheet.id
}

module.exports = themeBuilder