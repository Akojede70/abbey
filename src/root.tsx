import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {  Followers, Following, Profile  } from "./pages"
import { CombineProviders, providers } from "./contexts"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import UserList from "./pages/userlist"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <Fragment>
      <CombineProviders contexts={providers}>
        <Router>
          <Routes>
            <Route  index={true} path="/" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/dashboard" element={<UserList />} />
            <Route  path="/followers" element={<Followers />} />
            <Route  path="/following" element={<Following />} />
            <Route  path="/profile/:userId" element={<Profile />} />
           
          </Routes>
        </Router>
        <ToastContainer/>
      </CombineProviders>
    </Fragment>
  )
}

export default App
