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
        <input 
        type="text" 
        value={this.state.term} 
        onChange={this.handleInputChange}
        name="term"
        className="form-control" 
        placeholder="Book Name"></input>
    
      <Link to={`/search/${this.state.term}`} onClick={window.location.pathname===`/search/${this.state.term}`?window.location.reload():null}>
      <button 
      type="submit" 
      onClick={()=>this.props.submit(this.state.term)}
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
