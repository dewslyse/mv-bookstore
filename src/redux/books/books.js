import { v4 as uuidv4 } from 'uuid';

const ADDED_BOOK = 'mv-bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'mv-bookstore/books/REMOVED_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The power of habit',
    author: 'Charles Duhigg',
  },
  {
    id: uuidv4(),
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: uuidv4(),
    title: 'Thinking for a change',
    author: 'John C. Maxwell',
  },
];

// Action Creators
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
    case ADDED_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => (book.id !== action.payload)),
      ];
    default:
      return state;
  }
};

export default booksReducer;
