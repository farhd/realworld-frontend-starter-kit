import m from "mithril"

export default () => (
  <nav className="navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">conduit</a>
      <ul className="nav">
        <li className="nav-item active">
          <m.route.Link className="nav-link" href="/">Home</m.route.Link>
        </li>
        <li className="nav-item">
          <m.route.Link className="nav-link" href="/login">Sign In</m.route.Link>
        </li>
        <li className="nav-item">
          <m.route.Link className="nav-link" href="/signup">Sign up</m.route.Link>
        </li>
        <li className="nav-item">
          <m.route.Link className="nav-link" href="/articles/new">
            <i className="ion-compose"></i>&nbsp;New Post
          </m.route.Link>
        </li>
        <li className="nav-item">
          <m.route.Link className="nav-link" href="">Settings</m.route.Link>
        </li>
      </ul>
    </div>
  </nav>
)