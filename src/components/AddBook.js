import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const form = document.querySelector('form');

    if (title.trim() && author.trim()) {
      dispatch(addBook(
        {
          item_id: uuidv4(),
          title,
          author,
          category: '',
        },
      ));
      form.reset();
    }
  };

  return (
    <>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Book title" required />
        <input type="text" id="author" placeholder="Author" required />
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default AddBook;
