import React from "react";
import notesStore from "../store/notesStore";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const notes = () => {
  const store = notesStore();
  return (
    <div>
      <div className="flex items-center justify-around gap-9">
        <h2 className="text-4xl text-center mt-16">Notes:</h2>
        <Link to="/createnotes" className="text-4xl ">
          <AiOutlinePlus />
        </Link>
      </div>

      <div className="grid place-content-center md:grid-cols-3  sm:grid-cols-1 gap-4 mx-24 ">
        {store.notes &&
          store.notes.map((note) => {
            return (
              <div
                key={note._id}
                className="border-2 border-purple-100 my-6 mx-6 px-12 py-5"
              >
                <h3 className="text-3xl uppercase mb-3  ">{note.title}</h3>
                <h4 className="text-2xl my-5">{note.body}</h4>
                <div className="mb-4">
                  <button
                    onClick={() => store.deletenotes(note._id)}
                    className="bg-[#1062FE] text-white  hover:bg-blue-400 text-2xl mb-2 "
                    style={{
                      width: "150px",
                      height: "50px",
                      marginRight: "50px",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => store.toogleupdate(note)}
                    className="bg-[#1062FE] text-white  hover:bg-blue-400 text-2xl "
                    style={{
                      width: "150px",
                      height: "50px",
                      marginRight: "50px",
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default notes;
