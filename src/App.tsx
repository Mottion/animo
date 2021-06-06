import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Sobre from './pages/Sobre'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Sobre">
            <Sobre />
          </Route>
        </Switch>

      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
