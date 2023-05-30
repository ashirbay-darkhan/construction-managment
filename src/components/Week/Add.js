import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ tasks, setTasks, setIsAdding }) => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!title || !descr) {
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
