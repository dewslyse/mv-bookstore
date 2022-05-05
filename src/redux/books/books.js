// import { v4 as uuidv4 } from 'uuid';
import { fetchBooksFromAPI, deleteBookFromAPI, addBookToAPI } from '../../api/api';

const ADDED_BOOK = 'mv-bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'mv-bookstore/books/REMOVED_BOOK';
const FETCHED_BOOKS = 'mv-bookstore/books/FETCHED_BOOKS';

const initialState = [
  // {
  //   id: uuidv4(),
  //   title: 'The power of habit',
  //   author: 'Charles Duhigg',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Atomic Habits',
  //   author: 'James Clear',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Thinking for a change',
  //   author: 'John C. Maxwell',
  // },
];

const orderedBooks = (books) => books.sort((a, b) => ((a.title > b.title) ? 1 : -1));

// Action Creators
export const getBooks = () => async (dispatch) => {
  const allBooks = await fetchBooksFromAPI();
  // .then().sort((a, b) => a.title - b.title);
  // const sortedBooks = (dispatch) = allBooks.result.sort((a, b) => a.title - b.title);

  // allBooks.sort((a, b) => {
  //   if (a.title.toUpperCase() < b.title.toUpperCase()) {
  //     return -1;
  //   }
  //   if (a.title.toUpperCase() > b.title.toUpperCase()) {
  //     return 1;
  //   }
  //   return 0;
  // });

  const books = Object.keys(allBooks).map((key) => {
    const { title, author, category } = allBooks[key][0];
    return {
      item_id: key,
      title,
      author,
      category,
    };
  });

  // const sortedPayload = payload.sort((a, b) => a.title - b.title);

  dispatch({
    type: FETCHED_BOOKS,
    payload: orderedBooks(books),
  });
};

export const addBook = (book) => async (dispatch) => {
  addBookToAPI(book);
  dispatch({
    type: ADDED_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  deleteBookFromAPI(id);
  dispatch({
    type: REMOVED_BOOK,
    payload: id,
  });
};

// Reducer
const booksReducer = (state = initialState, action) => {
  // const books =
  switch (action.type) {
    case FETCHED_BOOKS:
      return action.payload; // orderedBooks(action.payload);
    case ADDED_BOOK:
      return orderedBooks([...state,
        action.payload]);
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => (book.item_id !== action.payload)),
      ];
    default:
      return state;
  }
};

export default booksReducer;
