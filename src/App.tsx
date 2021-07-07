import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import AnimePage from "./pages/AnimePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route exact path="/anime/:id" children={<AnimePage />} />
          <Route exact path="/myProfile/:type" children={<ProfilePage />} />
          <Route exact path="/search/:name" children={<SearchPage />} />
        </Switch>

      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
