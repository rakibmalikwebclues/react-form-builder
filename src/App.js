import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//Importing pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className="container main">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
