import { create } from 'zustand';
import axios from 'axios';

const notesStore = create((set) => ({
  notes:null,
  formvalue:{
    title:"",
    body:"",
  },
  updateformvalue:{
    _id:null,
    title:"",
    body:"",
  },
  fetchNotes:async()=>{
    const res = await axios.get("http://localhost:3000/notes");

    set({
      notes:res.data.notes,
    })

  },
  handleform:(e)=>{
    const { name, value } = e.target;
    set((state)=>{
      return{
        formvalue:{
          ...state.formvalue,
          [name]: value
        }
      
      }
    })
    
  },
  createNote:async(e)=>{
    e.preventDefault();
    const {formvalue,notes}=notesStore.getState();
    const res = await axios.post("http://localhost:3000/notes", formvalue);
    set({
      notes:[...notes, res.data.note],
      formvalue:{
        title: "",
        body: "",
      }
    })
    
  },
  deletenotes: async (_id) => {
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    const {notes}=notesStore.getState();
    const NewNotes = 
      notes.filter((note) => {
        return note._id !== _id;
      });
      set({notes:NewNotes});
   
 
},
handleupdateform:(e)=>{
  e.preventDefault();
    const { name, value } = e.target;
    set(state=>{
      return{
        updateformvalue:{
          ...state.updateformvalue,
          [name]:value,
        }
      }
    })
    
},
toogleupdate:(note)=>{
  const{title,body,_id}=note;
  set({
    updateformvalue:{
      title,
      body,
      _id,
    }
  })

},
updateform:async (e) => {
  e.preventDefault();
  const { updateformvalue:{title, body,_id },notes} = notesStore.getState();

  const res = await axios.put(
    `http://localhost:3000/notes/${_id}`,
    { title, body }
  );
  const newNotes = [...notes];
  const noteIndex = notes.findIndex((note) => {
    return note._id ===_id;
  });
  newNotes[noteIndex] = res.data.note;
  set({
    notes:newNotes,
    updateformvalue:{
      _id: null,
    title: "",
    body: "",

    }

  })
 
},

}))
export default notesStore;