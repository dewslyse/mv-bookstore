import React, { PureComponent } from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

class BooksContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 1,
          title: 'Atomic Habits',
          author: 'James Clear',
        },
        {
          id: 2,
          title: 'Full Stack',
          author: 'Microverse',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
        <AddBook />
      </div>
    );
  }
}

export default BooksContainer;
