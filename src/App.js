import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'
import AboutUs from './pages/aboutUs/AboutUs'
import Platform from './pages/platform/Platform'
import Campaigns from './pages/campaigns/Campaigns'
import Login from './pages/login/Login'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'


function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <div>
              <NavBar />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route path="/" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/platform" element={<Platform />}></Route>
          <Route path="/campaigns" element={<Campaigns />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* <Route
          path="/ong-details/:id"
          element={<OngDetails ngoslist={ngoslist} />}
        /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
