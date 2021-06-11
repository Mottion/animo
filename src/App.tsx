import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'

import GlobalStyles from './styles/GlobalStyles'
import AnimeInfo from "./pages/AnimeInfo";

function App() {
  return (
    <>
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/anime/:id" children={<AnimeInfo />} />
        </Switch>

      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
