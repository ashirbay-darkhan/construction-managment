import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ tasks, selectedTask, setTasks, setIsEditing }) => {
  const id = selectedTask.id;

  const [title, setTitle] = useState(selectedTask.title);
  const [descr, setDescr] = useState(selectedTask.descr);
  const [status, setStatus] = useState(selectedTask.status);
  const [img, setImg] = useState(selectedTask.img);
  const [comment, setComment] = useState(selectedTask.comment);

  const handleUpdate = e => {
    e.preventDefault();

    if (!title || !descr || !status) {
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
      status,
      img,
      comment
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
        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <label htmlFor="status">img</label>
        <input
          id="img"
          type="text"
          name="img"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
        <label htmlFor="comment">Comment</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
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
