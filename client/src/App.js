import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import SearchPage from "./pages/Search";

class App extends React.Component {
  state={
   term:""
  }
  handleFormSubmit = (term) => {
    if(term.length){
      console.log(`not zero`)
    this.setState({term:term})
    }
  };


  render(){
  return (
    <Router>
    <div>
      <Nav submit={this.handleFormSubmit} />
      <Switch>
      <Route exact path="/" component={Books}/>
      <Route exact path ="/saved" component={Books}/>
      <Route exact path="/search/:term" render={(props)=><SearchPage searchTerm={this.state.term}/>}/>
      </Switch>
    </div>
    </Router>
  )};
}

export default App;
