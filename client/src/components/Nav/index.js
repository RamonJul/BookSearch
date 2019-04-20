import React from "react";
import { Link } from "react-router-dom";
import Button from "./../button/index"
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
  changeRoute=()=>{
   const link=this.state.term.length?(`/search/${this.state.term}`):(window.location.pathname)
    return( <Link to={link} >
      <Button 
      type="submit" 
      className={"btn btn-primary"}
      onClick={this.props.submit}
      term={this.state.term}
      text={`Search`}
      />
      </Link>)
   
  }


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
    {this.changeRoute()}  
    </div>
    </nav>
  );
  }
}

export default Nav;
