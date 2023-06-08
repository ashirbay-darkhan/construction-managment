import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ tasks, setTasks, setIsAdding }) => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [status, setStatus] = useState('');
  const [img, setImg] = useState('');
  const [comment, setComment] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!title || !descr || !status) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      title,
      descr,
      status,
      img,
      comment
    };

    tasks.push(newEmployee);

    // TODO: Add doc to DB

    setTasks(tasks);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${title} ${descr}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Task</h1>
        <label htmlFor="firstName">Title</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="lastName">Description</label>
        <textarea
          id="lastName"
          type="text"
          name="lastName"
          value={descr}
          onChange={e => setDescr(e.target.value)}
        />
        <label htmlFor="firstName">Status</label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <label htmlFor="firstName">img</label>
        <input
          id="img"
          type="text"
          name="img"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
        <label htmlFor="firstName">Comment</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
