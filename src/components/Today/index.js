import React from 'react';

const Today = () => {
  return (
    <div className="p-4 sm:ml-64">

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white"> 🚀 Tasks For Today</h3>

      <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task
      </button>



      <ul className="grid w-full gap-6 md:grid-cols-3">
        <li>
          <input type="checkbox" id="react-option" value="" className="hidden peer" required=""></input>
            <label htmlFor="react-option"
                   className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">Create a detailed project plan for building a residential house</div>
                <div className="w-full text-sm">Please create a comprehensive project plan for building a residential house. Include all the necessary steps from acquiring permits and designing the blueprints to completing the construction. Break down the tasks into smaller subtasks, estimate the time and resources required for each task, and establish a timeline for the entire project.</div>
              </div>
            </label>
        </li>
        <li>
          <input type="checkbox" id="flowbite-option" value="" className="hidden peer"></input>
            <label htmlFor="flowbite-option"
                   className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">Develop a cost estimate for renovating a kitchen</div>
                <div className="w-full text-sm">I'm planning to renovate my kitchen, and I need a cost estimate for the project. Can you provide an itemized list of expenses, including materials, labor, permits, and any additional costs associated with the renovation? Please consider factors such as flooring, cabinetry, appliances, plumbing, electrical work, and any other relevant items.</div>
              </div>
            </label>
        </li>
        <li>
          <input type="checkbox" id="angular-option" value="" className="hidden peer"></input>
            <label htmlFor="angular-option"
                   className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">Write a safety manual for a construction site</div>
                <div className="w-full text-sm">Create a safety manual for a construction site that outlines the necessary safety procedures and precautions to ensure a safe working environment. Include guidelines for handling equipment, protocols for working at heights, instructions for handling hazardous materials, and procedures for reporting accidents or near-miss incidents. Emphasize the importance of personal protective equipment (PPE) and provide clear instructions on emergency response and evacuation protocols.</div>
              </div>
            </label>
        </li>
      </ul>


    </div>
  );
};

export default Today;
