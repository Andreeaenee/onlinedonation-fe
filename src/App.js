import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/register" element={<Registration />}></Route>
          <Route path="/new-donation" element={<NewDonation />} />
          <Route
            path="/login/register/email-verified"
            element={<VerifyEmailPage />}
          />
          <Route path="login/reset-password" element={<ForgetPassword />} />
          <Route path="/login/reset-password/email-verified" element={<ForgetPassword />} />
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
      </Routes>
    </Router>
  )
}

export default App
