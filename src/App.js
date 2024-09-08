import './App.css'
import { Suspense, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Unauthorized from './components/Unauthorized'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './components/AuthContext'
import { USER_ROLES } from './constants/constants'
import { exchangeCodeForToken } from './api/login/callback'
import {
  AboutUs,
  Platform,
  Login,
  NewDonation,
  Dashboard,
  Donations,
  UserProfilePage,
  Registration,
  VerifyEmailPage,
  ForgetPassword,
  RegistrationInfo,
  Users,
  UserProfileEditMode,
  EditDonation,
} from './lazyPages'

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      exchangeCodeForToken(code)
    }
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
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
              <Route path="/platform" element={<Platform />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/register" element={<Registration />} />
              <Route
                path="/new-donation"
                element={
                  <ProtectedRoute
                    element={NewDonation}
                    requiredRoles={[USER_ROLES.ADMIN, USER_ROLES.RESTAURANT]}
                  />
                }
              />
              <Route
                path="/edit-donation/:id"
                element={
                  <ProtectedRoute
                    element={EditDonation}
                    requiredRoles={[USER_ROLES.ADMIN, USER_ROLES.RESTAURANT]}
                  />
                }
              />
              <Route
                path="/login/register/email-verified/:userId"
                element={<VerifyEmailPage />}
              />
              <Route
                path="/login/register/complete-registration/:userId"
                element={<RegistrationInfo />}
              />
              <Route
                path="/login/reset-password"
                element={<ForgetPassword />}
              />
              <Route
                path="/login/reset-password/email-verified"
                element={<ForgetPassword />}
              />
            </Route>
            <Route
              element={
                <div>
                  <NavBar />
                  <Outlet />
                </div>
              }
            >
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute
                    element={Dashboard}
                    requiredRoles={[
                      USER_ROLES.ADMIN,
                      USER_ROLES.ONG,
                      USER_ROLES.RESTAURANT,
                    ]}
                  />
                }
              />
              <Route
                path="/dashboard/donations"
                element={
                  <ProtectedRoute
                    element={Donations}
                    requiredRoles={[
                      USER_ROLES.ADMIN,
                      USER_ROLES.ONG,
                      USER_ROLES.RESTAURANT,
                    ]}
                  />
                }
              />
              <Route
                path="/dashboard/users"
                element={
                  <ProtectedRoute
                    element={Users}
                    requiredRoles={[USER_ROLES.ADMIN]}
                  />
                }
              />
              <Route
                path="/dashboard/user-profile"
                element={
                  <ProtectedRoute
                    element={UserProfilePage}
                    requiredRoles={[
                      USER_ROLES.ADMIN,
                      USER_ROLES.ONG,
                      USER_ROLES.RESTAURANT,
                    ]}
                  />
                }
              />
              <Route
                path="/dashboard/user-profile/edit-profile/:userId"
                element={
                  <ProtectedRoute
                    element={UserProfileEditMode}
                    requiredRoles={[
                      USER_ROLES.ADMIN,
                      USER_ROLES.ONG,
                      USER_ROLES.RESTAURANT,
                    ]}
                  />
                }
              />
              <Route
                path="/dashboard/users/user-profile/:userId"
                element={
                  <ProtectedRoute
                    element={UserProfilePage}
                    requiredRoles={[USER_ROLES.ADMIN]}
                  />
                }
              />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Suspense>
  )
}

export default App
