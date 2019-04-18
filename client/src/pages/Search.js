import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Item from "../components/item/index"
import API from "./../utils/API"
class SearchPage extends React.Component{
state={
  term:"",
  books:[],
  saved:[]
}

  componentDidMount(){
    API.searchBooks(this.props.match.params.term).then(res=>{
      const books=res.data.items
      this.checkIfBookIsSaved(books)
      this.setState({
        term:this.props.match.params.term,
        books:res.data.items
      })

    })
   }  
   
   saveBook=index=>{
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

   checkIfBookIsSaved(books){
    const save=[]
      books.forEach(function(book){
        API.getBook(book.id)
        .then(res=>{

            if(res.data.length){
                save.push(book.id)
            }
            })

        })
      this.setState({
        saved:save
      })
   }
   compare(book){
     const idList=this.state.saved
     console.log(idList[0])
   if(this.state.saved!==undefined){
     console.log(book.id)
      for(let i=0;i<=idList.length;i++){
        console.log(idList[i])
      if(idList[i]===book.id)
        return true
      }
    }
   }

   checkIfBookIsValid(book,index){
    if(book.volumeInfo.imageLinks&&book.volumeInfo.description){
          if(this.compare(book)){
            console.log("saved")
            return   (<Item       
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              synopsis={book.volumeInfo.description}
              img={book.volumeInfo.imageLinks.thumbnail}
              key={book.id}
              link={book.volumeInfo.infoLink}
              task={this.saveBook}
              index={index}
              disabled={true}
              message={"x"}
              />)
          }
          else{
            console.log("not saved")
            return   (<Item       
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              synopsis={book.volumeInfo.description}
              img={book.volumeInfo.imageLinks.thumbnail}
              key={book.id}
              link={book.volumeInfo.infoLink}
              task={this.saveBook}
              index={index}
              disabled={true}
              message={"save"}
              />)
          }
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
                  
              )):(<h3>no search</h3>)
                  }
    
              </Col>
            </Row>
          </Container>
        )
    }


}
export default SearchPage