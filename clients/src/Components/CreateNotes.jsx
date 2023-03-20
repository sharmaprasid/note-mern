import React from 'react'
import notesStore from '../store/notesStore'

const CreateNotes = () => {
    const store=notesStore();
  return (
    <div>
         {!store.updateformvalue._id && (
        <div>
          <h1>Create Notes</h1>
          <form onSubmit={store.createNote}>
            <input name="title" value={store.formvalue.title} onChange={store.handleform} />
            <textarea
              name="body"
              value={store.formvalue.body}
              onChange={store.handleform}
            />
            <button type="submit">Create note</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateNotes