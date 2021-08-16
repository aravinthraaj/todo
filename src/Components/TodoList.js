import React from 'react';

import PropTypes from 'prop-types';

function TodoList(props) {
  const {
    children
  } = props;

  return (
    <div className="todo-list">
      <ul>
        {children}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  children:PropTypes.node
};

export default TodoList;
