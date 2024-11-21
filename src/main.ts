import './style.css'
import brandLogo from '/teritorio.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://teritorio.fr" target="_blank">
      <img src="${brandLogo}" class="logo" alt="Teritorio logo" />
    </a>
    <h1>OpenStreetMap logical history demo</h1>
  </div>
`
