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
    <li className="book-card">
      <div className="book-details">
        <p className="category">General</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <button className="btn" type="button">Comments</button>
        <button className="btn" type="button" onClick={() => handleRemove(book.item_id)}>
          Remove
        </button>
        <button className="btn" type="button">Edit</button>
      </div>

      <div className="progress-col">
        <div className="progress" />
        <div className="progress-detail">
          <h3 className="percent">25%</h3>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="chap-col">
        <p className="current-chap">Current chapter</p>
        <p className="chap">
          Chapter
          <span>
            {Math.floor(Math.random() * 16)}
          </span>
        </p>
        <button className="progress-btn" type="button">Update progress</button>
      </div>
    </li>
  );
};

Book.defaultProps = {
  book: [],
};

Book.propTypes = {
  book: PropTypes.shape(
    {
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    },
  ),
};

export default Book;
