import { lazy } from 'react';

const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'));
const Platform = lazy(() => import('./pages/platform/Platform'));
const Login = lazy(() => import('./pages/login/Login'));
const NewDonation = lazy(() => import('./pages/NewDonation/NewDonation'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Donations = lazy(() => import('./pages/dashboard/donations/Donations'));
const UserProfilePage = lazy(() => import('./pages/dashboard/user-profile/UserProfile'));
const Registration = lazy(() => import('./pages/login/registration/Registration'));
const VerifyEmailPage = lazy(() => import('./pages/login/registration/EmailVerification'));
const ForgetPassword = lazy(() => import('./pages/login/ForgetPassword'));
const RegistrationInfo = lazy(() => import('./pages/login/registration/RegistrationInfo'));
const Users = lazy(() => import('./pages/dashboard/dashboard-admin/Users'));
const UserProfileEditMode = lazy(() => import('./pages/dashboard/user-profile/EditUserProfile'));
const EditDonation = lazy(() => import('./pages/NewDonation/EditDonation'));

export {
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
};
