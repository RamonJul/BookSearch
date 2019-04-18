import axios from "axios";

export default {
  // Gets all books
  getBooks: ()=> {
    return axios.get("/api/books/saved");
  },
  // Gets the book with the given id
  getBook: (id) => {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: (id)=> {
    return axios.delete("/api/books/delete/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData)=> {
    return axios.post("/api/books/add", bookData);
  },
  searchBooks:(searchTerm)=>{
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
  }
};
