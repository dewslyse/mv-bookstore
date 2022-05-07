import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className="book-list container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
