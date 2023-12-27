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
// const ngoslist = [
//   {
//     title: 'ONG1',
//     description: 'description1',
//   },
//   {
//     title: 'ONG2',
//     description: 'description2',
//   },
//   {
//     title: 'ONG3',
//     description: 'description3',
//   },
//   {
//     title: 'ONG4',
//     description: 'description4',
//   },
//   {
//     title: 'ONG5',
//     description: 'description5',
//   },
//   {
//     title: 'ONG6',
//     description: 'description6',
//   },
//   {
//     title: 'ONG7',
//     description: 'description7',
//   },
//   {
//     title: 'ONG8',
//     description: 'description8',
//   },
//   {
//     title: 'ONG9',
//     description: 'description9',
//   },
//   {
//     title: 'ONG10',
//     description: 'description10',
//   },
// ]

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <div>
              <NavBar />
              <Outlet />
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
