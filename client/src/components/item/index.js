import React from "react";
import "./item.css"
class Item extends React.Component{
    state={
        authors:this.props.authors
    }
    render(){
        console.log(this.props.title)
        return(

            <div className="Item">

            <div className="col-1">
            <img src={this.props.img} alt="book cover"></img>
            </div>
       
            <div className="bookInfo col-11">   


            <div className="Header">
            <h3>{this.props.title}</h3>

                 <button onClick={()=>this.props.task(this.props.index)} className={this.props.disabled?("btn btn-primary disabled"):("btn btn-primary")}>{this.props.message}</button>


    


            </div>
           

            <div className="author"> 
            {this.props.authors!=null?(

                 this.state.authors.map((name,index)=> (  
                    <h4 className="name"key={index}>{name}</h4>
                 ))):(
                     <h4 className="name">name</h4>
                 

            )}
           
            </div>
            <p className="synopsis">{this.props.synopsis}</p>
            </div>
          

            </div>
        )
    }


}

export default Item