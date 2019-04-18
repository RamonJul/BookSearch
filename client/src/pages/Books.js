import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Item from "../components/item/index"
import API from "./../utils/API"

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
                 disabled={false}
                 />
              ))
          ):(
            <h3>nothing saved</h3>
          )}

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
