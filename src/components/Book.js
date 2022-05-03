import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
    </li>
  );
};

Book.defaultProps = {
  book: [],
};

Book.propTypes = {
  book: PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    },
  ),
};

export default Book;
