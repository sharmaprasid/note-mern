import React from "react";
import notesStore from "../store/notesStore";
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {
  const store = notesStore();
  return (
    <div className="flex items-center justify-center">
      {!store.updateformvalue._id && (
        <div>
          <h1 className="flex items-center justify-center text-3xl my-10">
            Create Notes
          </h1>
          <div
            className="border-2 border-black my-10 "
            style={{ width: "400px", height: "400px" }}
          >
            <form
              onSubmit={store.createNote}
              className="flex flex-col items-center justify-center my-12"
            >
              <input
                name="title"
                value={store.formvalue.title}
                onChange={store.handleform}
                className="border-2 border-blue-100 hover:border-blue-300 px-3 my-3 h-10"
                placeholder="Title"
                style={{ width: "300px" }}
              />
              <textarea
                name="body"
                value={store.formvalue.body}
                onChange={store.handleform}
                className="border-2 border-blue-100 hover:border-blue-300 px-3 my-3"
                style={{ width: "300px", height: "200px" }}
              />
              <button
                type="submit"
                className="bg-[#1062FE] text-white  hover:bg-blue-400 text-2xl mb-10 "
                style={{ width: "150px", height: "50px", marginRight: "50px" }}
              >
                Create note
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNotes;
