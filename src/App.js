import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import AboutUs from './pages/aboutUs/AboutUs';
import Platform from './pages/platform/Platform';
import Login from './pages/login/Login';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NewDonation from './pages/NewDonation/NewDonation';
import Dashboard from './pages/dashboard/Dashboard';
import DonationsRestPage from './pages/dashboard/dashboard-restaurants/donation_restaurants/DonationsRestPage';
import UserProfilePage from './pages/dashboard/user-profile/UserProfile';
import Registration from './pages/login/registration/Registration';
import VerifyEmailPage from './pages/login/registration/EmailVerification';
import ForgetPassword from './pages/login/ForgetPassword';
import Unauthorized from './components/Unauthorized';
import { exchangeCodeForToken } from './api/login/callback';
import RegistrationInfo from './pages/login/registration/RegistrationInfo';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import { USER_ROLES } from './constants/constants';

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  return (
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
            <Route path="/new-donation" element={<NewDonation />} />
            <Route
              path="/login/register/email-verified/:userId"
              element={<VerifyEmailPage />}
            />
            <Route
              path="/login/register/complete-registration/:userId"
              element={<RegistrationInfo />}
            />
            <Route path="/login/reset-password" element={<ForgetPassword />} />
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
                  element={DonationsRestPage}
                  requiredRoles={[
                    USER_ROLES.ADMIN,
                    USER_ROLES.ONG,
                    USER_ROLES.RESTAURANT,
                  ]}
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
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
