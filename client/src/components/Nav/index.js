import React from "react";
import { Link } from "react-router-dom";
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div id="redirectLinks">
    <h6 className="navbar-brand">
       <Link to="/" className={window.location.pathname==="/"?"nav-link active" : "nav-link" }>
       Google books saver
       </Link>
        </h6>
      
      <h6 className="navbar-brand">
      <Link to="/saved" className={window.location.pathname==="/"?"nav-link active" : "nav-link"} >
      Saved
      </Link>
      </h6>
    </div>
    <div id="search">
      <form>  
        <input 
        type="text" 
        value={this.state.term} 
        onChange={this.handleInputChange}
        name="term"
        className="form-cpntrol" 
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
