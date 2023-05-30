import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ tasks, selectedTask, setTasks, setIsEditing }) => {
  const id = selectedTask.id;

  const [title, setTitle] = useState(selectedTask.title);
  const [descr, setDescr] = useState(selectedTask.descr);

  const handleUpdate = e => {
    e.preventDefault();

    if (!title || !descr ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const task = {
      id,
      title,
      descr,
    };

    // TODO: Update document

    setTasks(tasks);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${task.title} ${task.descr}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Task</h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="firstName"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="descr">Description</label>
        <input
          id="descr"
          type="text"
          name="lastName"
          value={descr}
          onChange={e => setDescr(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
