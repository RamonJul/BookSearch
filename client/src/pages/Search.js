import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Item from "../components/item/index"
import API from "./../utils/API"
class SearchPage extends React.Component{
state={
  term:"",
 books:[]
}

  componentDidMount(){

     this.setState({term:this.props.match.params.term})
    
     
   }  
 
    render(){

        return(
            <Container fluid>
            <Row>
              <Col size="md-12">
              {this.state.books.length?(
    
                  this.state.books.map( book=>(
                    <Item
                     title={book.title}
                     authors={book.authors}
                     synopsis={book.synopsis}
                     img={book.img}
                     product_id={book.product_id}
                     link={book.link}
    
                     />
                  ))
              ):(
                <h3>no search</h3>
              )}
    
              </Col>
            </Row>
          </Container>
        )
    }


}
export default SearchPage