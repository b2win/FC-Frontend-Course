import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import useActions from "../lib/useActions";

function TodosContainer() {
  const { input, todos } = useSelector(
    // ({ todos }) => ({
    //   input: todos.input,
    //   todos: todos.todos,
    // })
    ({ todos }) => ({
      input: todos.input,
      todos: todos.todos,
    })

    // shallowEqual
  );

  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onInsert={onInsert}
      onRemove={onRemove}
    />
  );
}

export default React.memo(TodosContainer);
