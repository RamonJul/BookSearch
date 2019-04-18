import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"
class Nav extends React.Component {
  state={
    term:""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
    }
  };
  render(){
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div id="redirectLinks">
   
       <Link to="/" className={window.location.pathname==="/"?"nav-link active" : "nav-link" }>
       <h6 className="navbar-brand route">
       Google books saver
       </h6>
       </Link>
     
      
      
      <Link to="/saved" className={window.location.pathname==="/"?"nav-link active" : "nav-link"}  >
      <h6 className="navbar-brand route">
      Saved
      </h6>
      </Link>
     
    </div>
    <div id="search">
      <form>  
        <input 
        type="text" 
        value={this.state.term} 
        onChange={this.handleInputChange}
        name="term"
        className="form-control" 
        placeholder="Book Name"></input>
      </form>
      <Link to={`/search/${this.state.term}`}>
      <button 
      type="submit" 
      onChange={this.state.handleFormSubmit}
      className="btn btn-primary">
      Search
      </button>
      </Link>

    </div>
 



    </nav>
  );
  }
}

export default Nav;
