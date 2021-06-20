import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import AnimeInfo from "./pages/AnimeInfo";
import ProfilePage from "./pages/ProfilePage";

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/anime/:id" children={<AnimeInfo />} />
          <Route exact path="/myProfile/:info" children={<ProfilePage />} />
        </Switch>

      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
