import React from "react";
import notesStore from "../store/notesStore";

const UpdateNotes = () => {
  const store = notesStore();
  return (
    <div className="flex items-center justify-center">
      {store.updateformvalue._id && (
        <div>
          <h2 className="flex items-center justify-center text-3xl my-10">
            Update Notes
          </h2>
          <div
            className="border-2 border-black my-10 "
            style={{ width: "400px", height: "400px" }}
          >
            <form
              onSubmit={store.updateform}
              className="flex flex-col items-center justify-center my-12"
            >
              <input
                name="title"
                value={store.updateformvalue.title}
                onChange={store.handleupdateform}
                className="border-2 border-blue-100 hover:border-blue-300 px-3 my-3 h-10"
                placeholder="Title"
                style={{ width: "300px" }}
              />
              <textarea
                name="body"
                value={store.updateformvalue.body}
                onChange={store.handleupdateform}
                className="border-2 border-blue-100 hover:border-blue-300 px-3 my-3"
                style={{ width: "300px", height: "200px" }}
              />
              <button
                type="submit"
                className="bg-[#1062FE] text-white  hover:bg-blue-400 text-2xl mb-10 "
                style={{ width: "150px", height: "50px", marginRight: "50px" }}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateNotes;
