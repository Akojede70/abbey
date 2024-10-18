import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Landing, Followers, Following, Profile  } from "./pages"
import { CombineProviders, providers } from "./contexts"





function App() {
  return (
    <Fragment>
      <CombineProviders contexts={providers}>
        <Router>
          <Routes>
            <Route index={true} path="/" element={<Landing />} />
            <Route  path="/followers" element={<Followers />} />
            <Route  path="/following" element={<Following />} />
            <Route  path="/profile" element={<Profile />} />
           
          </Routes>
        </Router>
      </CombineProviders>
    </Fragment>
  )
}

export default App
