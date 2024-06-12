import './App.css'
import { useEffect } from 'react'

import AboutUs from './pages/aboutUs/AboutUs'
import Platform from './pages/platform/Platform'
import Login from './pages/login/Login'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import NewDonation from './pages/NewDonation/NewDonation'
import Dashboard from './pages/dashboard/Dashboard'
import DonationsRestPage from './pages/dashboard/dashboard-restaurants/donation_restaurants/DonationsRestPage'
import UserSettingsRestPage from './pages/dashboard/dashboard-restaurants/user-settings/UserSettingsRestPage'
import Registration from './pages/login/registration/Registration'
import VerifyEmailPage from './pages/login/registration/EmailVerification'
import ForgetPassword from './pages/login/ForgetPassword'
import { exchangeCodeForToken } from './api/login/callback'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'
import RegistrationInfo from './pages/login/registration/RegistrationInfo'
import Test from './pages/test'

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      exchangeCodeForToken(code)
    }
  }, [])
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/register" element={<Registration />}></Route>
          <Route path="/new-donation" element={<NewDonation />} />
          <Route
            path="/login/register/email-verified/:userId"
            element={<VerifyEmailPage />}
          />
            <Route
            path="/login/register/complete-registration/:userId"
            element={<RegistrationInfo />}
          />
          <Route path="login/reset-password" element={<ForgetPassword />} />
          <Route
            path="/login/reset-password/email-verified"
            element={<ForgetPassword />}
          />
          {/* <Route
          path="/ong-details/:id"
          element={<OngDetails ngoslist={ngoslist} />}
        /> */}
        </Route>
        <Route
          element={
            <div>
              <NavBar />
              <Outlet />
            </div>
          }
        >
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/dashboard/donations"
            element={<DonationsRestPage />}
          ></Route>
          <Route
            path="/dashboard/user-settings"
            element={<UserSettingsRestPage />}
          ></Route>
        </Route>
        <Route path="/test" element={< Test/>} />
      </Routes>
    </Router>
  )
}

export default App
