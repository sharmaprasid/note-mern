import React from 'react'
import notesStore from '../store/notesStore'

const UpdateNotes = () => {
    const store= notesStore();
  return (
   
    <div>
        {store.updateformvalue._id && (
        <div>
          <h2>Update Notes</h2>
          <form onSubmit={store.updateform}>
            <input
              name="title"
              value={store.updateformvalue.title}
              onChange={store.handleupdateform}
            />
            <textarea
              name="body"
              value={store.updateformvalue.body}
              onChange={store.handleupdateform}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default UpdateNotes