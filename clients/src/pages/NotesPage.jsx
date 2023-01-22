import React, { useEffect } from 'react'
import CreateNotes from '../Components/CreateNotes'
import Notes from '../Components/Notes'
import UpdateNotes from '../Components/UpdateNotes'
import notesStore from '../store/notesStore'

const NotesPage = () => {
    const store=notesStore();

    useEffect(() => {
      store.fetchNotes();
    }, []);
  return (
    <div>
              <Notes/>
<UpdateNotes/>
      <CreateNotes/>
    </div>
  )
}

export default NotesPage