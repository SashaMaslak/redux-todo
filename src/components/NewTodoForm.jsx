import React from 'react';

const NewTodoForm = ({ value, handleInput, handleSubmit }) => {
  return (
    <div>
      <label>
        <input
          placeholder="new todo"
          value={value}
          onChange={e => handleInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add todo</button>
      </label>
    </div>
  );
};

export default NewTodoForm;
