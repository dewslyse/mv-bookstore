import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const BooksContainer = () => (
  <main>
    <BookList />
    <AddBook />
  </main>
);

export default BooksContainer;
