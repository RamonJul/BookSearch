import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Item from "../components/item/index"
import API from "./../utils/API"
const h3Style={
  textAlign:`center`
}
class SearchPage extends React.Component{
state={
  term:"",
  books:[],
}

  componentDidMount=()=>{
    this.rerRender(this.props.searchTerm)
  }

  

  componentDidUpdate=()=>
  {if(this.props.searchTerm!==this.state.term)
    this.rerRender(this.props.searchTerm)
  }


   rerRender=(term)=>{
     let booksGoogle=[]
     let searchTerm=term||JSON.parse(localStorage.getItem('term'))
    API.searchBooks(searchTerm).then(res=>{
      booksGoogle=res.data.items
      this.setState({
        term:searchTerm,
        books:booksGoogle,
      },()=>{
        localStorage.setItem('term', JSON.stringify(this.state.term))
      })
    })
   }
   
   saveBook=(index)=>{
      const book=this.state.books[index]
      const {title,authors,description,infoLink}=book.volumeInfo

      const newBook={
        title:title,
        product_id:book.id,
        authors:authors,
        synopsis:description,
        link:infoLink,
        image:book.volumeInfo.imageLinks.thumbnail
      }

      API.saveBook(newBook)
   }

   checkIfBookIsValid=(book,index)=>{
    if(book.volumeInfo.imageLinks&&book.volumeInfo.description){
            return   (<Item       
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              synopsis={book.volumeInfo.description}
              img={book.volumeInfo.imageLinks.thumbnail}
              key={book.id}
              id={book.id}
              link={book.volumeInfo.infoLink}
              task={this.saveBook}
              index={index}
              message1={`SAVED`}
              message2={`SAVE`}
              />)
          }
    
    else{
      return false
    }
   }

    render(){
    
        return(
            <Container fluid>
            <Row>
              <Col size="md-12">
              {this.state.books.length?(
    
                  this.state.books.map( (book,index)=>                  
                    this.checkIfBookIsValid(book,index)
                  
              )):(<h3 style={h3Style}>no results</h3>)
                  }
    
              </Col>
            </Row>
          </Container>
        )
    }


}
export default SearchPage