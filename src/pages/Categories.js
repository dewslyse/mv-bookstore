import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <main>
      <h1>{categories}</h1>
      <button type="button" onClick={() => handleStatus()}>Check status</button>
    </main>
  );
};

export default Categories;
