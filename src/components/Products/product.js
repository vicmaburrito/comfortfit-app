/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line react/prop-types
export default function Product({ Image, category }) {
  return (
    <li className="inline-flex w-64 flex-col text-center lg:w-auto mt-10">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
          <img src={Image} alt="Black machined steel pen with hexagonal grip and small white logo at top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Black</p>
          <h3 className="mt-1 font-semibold text-gray-900">
            <a href="/">
              <span className="absolute inset-0" />
              {category}
            </a>
          </h3>
          <p className="mt-1 text-gray-900">$35</p>
        </div>
      </div>

      <h4 className="sr-only">Available colors</h4>
      <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
        <li className="h-4 w-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: '#111827' }}>
          <span className="sr-only">Black</span>
        </li>
        <li className="h-4 w-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: '#fde68a' }}>
          <span className="sr-only">Brass</span>
        </li>
        <li className="h-4 w-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: '#e5e7eb' }}>
          <span className="sr-only">Chrome</span>
        </li>
      </ul>
    </li>
  );
}
