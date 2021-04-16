import React from 'react';
import TodoListItems from './TodoListItems';
import './TodoList.scss';

function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItems />
      <TodoListItems />
      <TodoListItems />
    </div>
  );
}

export default TodoList;
