import React, {useEffect, useState} from 'react';

import Header from "./Header";
import Cards from "./Cards";
import Add from "./Add";
import Edit from "./Edit";
import Swal from "sweetalert2";
import {planning} from "../../data/planning";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import {db} from "../../config/firestore";

const Today = () => {

  const [tasks, setTasks] = useState([])
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "planning"));
    const tasks = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setTasks(tasks)
  }

  useEffect(() => {
    getTasks()
  }, []);

  const handleEdit = id => {
    const [task] = tasks.filter(task => task.id === id);

    setSelectedTask(task);
    setIsEditing(true);
  };


  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [task] = tasks.filter(task => task.id === id);

        // TODO delete document

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${task.title} ${task.descr}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const tasksCopy = tasks.filter(task => task.id !== id);
        setTasks(tasksCopy);
      }
    });
  };


  return (
    <div className="p-4 mt-12 sm:ml-64">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <Cards
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          tasks={tasks}
          setTasks={setTasks}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          tasks={tasks}
          selectedTask={selectedTask}
          setTasks={setTasks}
          setIsEditing={setIsEditing}
          getTasks={getTasks}
        />
      )}
    </div>
  );
};

export default Today;
