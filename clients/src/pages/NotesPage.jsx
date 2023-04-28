import React, { useEffect } from "react";

import Notes from "../Components/Notes";
import UpdateNotes from "../Components/UpdateNotes";
import notesStore from "../store/notesStore";

const NotesPage = () => {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);
  return (
    <div>
      <Notes />
      <UpdateNotes />
    </div>
  );
};

export default NotesPage;
