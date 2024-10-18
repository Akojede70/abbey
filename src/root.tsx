import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Landing  } from "./pages"
import { CombineProviders, providers } from "./contexts"




function App() {
  return (
    <Fragment>
      <CombineProviders contexts={providers}>
        <Router>
          <Routes>
            <Route index={true} path="/" element={<Landing />} />
           
          </Routes>
        </Router>
      </CombineProviders>
    </Fragment>
  )
}

export default App
