import React from 'react'

export default () => {
  return (
    <div className="editor">
      <div>
        <textarea
          className="textarea"
          placeholder="Write here..."
        />
      </div>
      <div className="editor__preview">
        <p>Preview here</p>
      </div>
    </div>
  )
}
