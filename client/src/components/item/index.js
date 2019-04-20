import React from "react";
import "./item.css"
import API from "./../../utils/API"
class Item extends React.Component{
    state={
        authors:this.props.authors,
        product_id:this.props.id,
        saved:false,

    }
    componentDidMount=()=>{
        if(this.state.product_id!==null){
        API.getBook(this.state.product_id)
        .then(res=>{
            if(res.data.length){
              this.setState({saved:true})
            }
            })}}
    savebook(){
        this.props.task(this.props.index)
        this.setState({saved:true})
    }
    
    render(){
        let message1=this.props.message1
        let message2=this.props.message2
        const message=this.state.saved?(message1):(message2)
        return(

            <div className="Item">

            <div className="col-1">
            <a href={this.props.link}>
            <img src={this.props.img} alt="book cover"></img>
            </a>
            </div>
       
            <div className="bookInfo col-11">   


            <div className="Header">
            <h3>{this.props.title}</h3>

                 <button onClick={()=>this.savebook()}
                  className={this.state.saved?("btn btn-primary disabled"):("btn btn-primary")}
                  disabled={this.state.saved}>
                  {message}
                  </button>
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