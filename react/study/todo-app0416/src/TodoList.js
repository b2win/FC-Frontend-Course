import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItems from './TodoListItems';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {
  const rowRencerer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItems
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRencerer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
}

export default React.memo(TodoList);
