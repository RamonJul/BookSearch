import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Item from "../components/item/index"
import API from "./../utils/API"
const h3Style={
  textAlign:`center`
}
class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };
  componentDidMount(){
    this.grabBooks()
  }  
 grabBooks(){
  API.getBooks().then(res=>{
    console.log("mounting")
    this.setState({books:res.data})
   }
    )
 }
  delete=id=>{
    console.log(id)
      API.deleteBook(id)
      .then(res=>{this.grabBooks()})
      .catch(err=> console.log(err))
      }
  

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    if (this.state.books){
     
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          {this.state.books.length?(

              this.state.books.map( book=>(
                <Item
                 title={book.title}
                 authors={book.authors}
                 synopsis={book.synopsis}
                 img={book.image}
                 key={book.product_id}
                 link={book.link}
                 task={this.delete}
                 index={book._id}
                 message1={`DELETE`}
                 message2={`DELETE`}
                 />
              ))
          ):(
            <h3 style={h3Style}>nothing saved</h3>
          )}

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
