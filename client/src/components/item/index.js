import React from "react";
class Item extends React.Component{

    render(){
        return(


            <div className="Item">

            <div className="col-4">
            <img src={this.props.img} alt="book cover"></img>
            </div>
       
            <div className="bookInfo col-8">   
            <h3>{this.props.title}</h3>

            <div className="authors"> 

            {this.prop.authors.map(element=> (  
               <h4>{element}</h4>
            ))}
            </div>
            <p className="synopsis">{this.prop.synopsis}</p>
            </div>
          

            </div>
        )
    }


}

export default Item