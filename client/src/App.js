import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import SearchPage from "./pages/Search";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Books}/>
      <Route exact path ="/saved" component={Books}/>
      <Route exact path="/search/:term" component={SearchPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
