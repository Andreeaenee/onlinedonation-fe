import './App.css';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import OngDetails from './pages/OngDetails/OngDetails';

const ngoslist = [
  {
    title: "ONG1",
    description: "description1",
  },
  {
    title: "ONG2",
    description: "description2",
  },
  {
    title: "ONG3",
    description: "description3",
  },
  {
    title: "ONG4",
    description: "description4",
  },
  {
    title: "ONG5",
    description: "description5",
  },
  {
    title: "ONG6",
    description: "description6",
  },
  {
    title: "ONG7",
    description: "description7",
  },
  {
    title: "ONG8",
    description: "description8",
  },
  {
    title: "ONG9",
    description: "description9",
  },
  {
    title: "ONG10",
    description: "description10",
  },
];

function App() {
  return (
    <Router>
    <Routes>
        <Route
          path="/"
          element={   
            <MainPage />
          }
        />
        <Route
          path="/home"
          element={
              <MainPage />
          }
        />
        <Route
  path="/ong-details/:id"
  element={<OngDetails ngoslist={ngoslist} />}
/>
      </Routes>
      </Router>
  );
}

export default App;
