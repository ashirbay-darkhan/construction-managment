import React, {createContext} from 'react';
import {Link} from "react-router-dom";

const Index = () => {

  return (
    <div className="p-4 mt-12 sm:ml-64">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">💒 Construction Manager</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6 pt-5">The app helps construction managers to efficiently track and manage project progress, communicate with team members, and ensure that construction projects are completed successfully within budget and schedule.</p>
            <Link to="/planning"
               className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              First Stage
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/planning">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Planning and Design</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Determine your needs, budget, and style preferences.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Find a suitable location or lot for your house.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/sitePreparation">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Site Preparation</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Clear the land and remove any debris or obstacles.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Excavate the site and level the ground.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/foundation">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foundation Construction</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Dig trenches for footings and pour the concrete footings.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Install drainage and waterproofing systems.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/framing">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Framing</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Install beams, columns, and load-bearing walls.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Add subflooring, sheathing, and roof trusses.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/plumbing">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Plumbing, Electrical, and HVAC</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Rough-in plumbing and install water supply lines, sewer lines, and plumbing fixtures.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/insulation">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Insulation and Drywall</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Install insulation in the walls, attic, and floors for energy efficiency.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hang drywall or plasterboard on walls and ceilings.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/interior">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interior Finishes</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Install interior doors, trim, and moldings.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Paint or apply wallpaper to walls and ceilings.</p>
            </div>
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/exterior">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Exterior Finishes</h5>
              </Link>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Install exterior siding, brickwork, or stucco.</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Paint or finish the exterior surfaces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
