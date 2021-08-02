import React from 'react'
function getInputComment(e) {
  console.log(e.target.value)
}
function Comment() {
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" onChange={getInputComment}></textarea>
    </div>
  )
}

export default Comment

