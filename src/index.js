import m from "mithril";

function Hello() {
  return {
    view: () => (
      <main>
        <h1>Hello world</h1>
      </main>
    )
  };
}

m.render(document.body, <Hello />);
