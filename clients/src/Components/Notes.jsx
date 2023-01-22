import React from 'react'
import notesStore from "../store/notesStore";

const notes = () => {
    const store=notesStore();
  return (
    <div>
        <div>
        <h2>Notes:</h2>

        {store.notes &&
          store.notes.map((note) => {
            return (
              <div key={note._id}>
                <h3>{note.title}</h3>
                <button onClick={() => store.deletenotes(note._id)}>Delete</button>
                <button onClick={() => store.toogleupdate(note)}>Update</button>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default notes