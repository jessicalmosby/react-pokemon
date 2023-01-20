import { type } from '@testing-library/user-event/dist/type/index.js';
import React from 'react';

export default function Select({ types, handleTypeChange }) {
  return (
    <select onChange={(e) => handleTypeChange(e.target.value)}>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
