const html = require('choo/html')

function publishButton(state, emit) {
  function replaceAll(target, search, replacement) {
    return target.split(search).join(replacement)
  }
  const error = html`<p class="error">The name is already taken</p>`
  const success = html`<p class="success">Your theme is published</p>`
  let themeName;
  let themeAuthor;
  let message = null
  if (state.publishStatus) {
    message = success
  }
  if (state.publishStatus === false) {
    message = error
  }
  return html`
  <div>
    <ul className="publishForm" >
    <li>
      <small>Theme's Name</small>
      <input onkeyup=${(e) =>{
        themeName = e.target.value
      } } type="text" >
    </li>
    <li>
    <small>Author's Name</small>
    <input onkeyup=${(e) =>{
      themeAuthor = e.target.value
    }} type="text" >
  </li>

    </ul>
     <a onclick=${publish}>
      [Publish Theme]
     </a>
     ${message}
    </div>
  `
  function publish() {
    emit('render')
    emit('publishTheme', {
      'name': replaceAll(themeName, ' ', '-'),
      'author': themeAuthor
    })
  }
}

module.exports = publishButton
