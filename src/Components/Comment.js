import React from 'react';
import PropTypes from 'prop-types';

function Comment({ getInputComment, id, value = '' }) {
  const handleInputChange = (e) => {
    getInputComment(e.target.value, e.target.name, id);
  };
  return (
    <div>
      <textarea
        className="comment"
        name="comment_data"
        id=""
        cols="30"
        rows="10"
        value={value}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  getInputComment: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
};
