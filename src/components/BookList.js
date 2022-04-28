import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends PureComponent {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
  ),
};

export default BookList;
