import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  // const sortedBooks = books.sort((a, b) => a.title - b.title);

  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
