import m from "mithril"

import "./main.scss"

function Hello() {
  return {
    view: () => (
      <main>
        <h1>Hello world</h1>
      </main>
    )
  }
}

m.render(document.body, <Hello />)
