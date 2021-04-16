import React from 'react';
import TodoListItems from './TodoListItems';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItems
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
