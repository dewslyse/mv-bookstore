import { v4 as uuidv4 } from 'uuid';
import { fetchBooksFromAPI } from '../../api/api';

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

// Action Creators
export const getBooks = () => async (dispatch) => {
  const allBooks = await fetchBooksFromAPI();

  const payload = Object.keys(allBooks).map((key) => {
    const { title, author, category } = allBooks[key][0];
    return {
      item_id: key,
      title,
      author,
      category,
    };
  });
  dispatch({
    type: FETCHED_BOOKS,
    payload,
  });
};

export const addBook = (title, author) => ({
  type: ADDED_BOOK,
  payload: { title, author, id: uuidv4() },
});

export const removeBook = (id) => ({
  type: REMOVED_BOOK,
  payload: id,
});

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_BOOKS:
      return action.payload;
    case ADDED_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => (book.item_id !== action.payload)),
      ];
    default:
      return state;
  }
};

export default booksReducer;
