import m from "mithril"

// import { createStore, createEvent } from 'effector'

// import "./main.scss"

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import Auth from './pages/auth/auth.jsx'

// const login = createEvent()
//   .use(({ login, password }) => {
//     console.log(login, password)
//     return Promise.resolve({
//       name: 'user', 
//       articles: ['a', 'b']
//     })
//   })

// const store = createStore({})
//   .on(login.doneData, (store, user) => ({ ...store, user }))

m.route(document.body, '/', {
  '/': Layout(Home),
  '/login': Layout(Auth),
})

function Layout(Page) {
  return {
    view: () => (
      <div>
        { Header() }
        { Page() }
        { Footer() }
      </div>
    )
  }
}