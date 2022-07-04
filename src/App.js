import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Create from "./pages/Create"
import Forms from "./pages/Forms"
import Fill from "./pages/Fill"

//Importing pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className="container main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />
              <Route path="/forms" component={Forms} />
              <Route path="/fill/:id" component={Fill} />
            </Switch>
          </div>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
