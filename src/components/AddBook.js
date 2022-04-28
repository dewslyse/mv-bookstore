import React, { PureComponent } from 'react';

class AddBook extends PureComponent {
  render() {
    return (
      <>
        <h2>Add new book</h2>
        <form>
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
          <button type="submit">Add book</button>
        </form>
      </>
    );
  }
}

export default AddBook;
