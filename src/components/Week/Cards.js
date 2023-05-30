import React from 'react';

const Cards = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <ul className="grid w-full gap-6 md:grid-cols-3">
      {tasks.map(task =>
        <li>
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.descr}</p>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                onClick={() => handleEdit(task.id)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Edit</button>
              <button
                onClick={() => handleDelete(task.id)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
            </div>
          </div>
        </li>
      )}

    </ul>
  );
};

export default Cards;
