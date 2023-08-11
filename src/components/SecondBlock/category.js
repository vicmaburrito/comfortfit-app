import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Category({ image, categoryName, productLink }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
        <img src={image} alt="Model wearing women&#039;s black cotton crewneck tee." className="h-full w-full object-cover object-center" />
      </div>
      <h1 className="mt-4 text-xl text-gray-900">
        <Link to={productLink} className="navbar-brand links-nav display-4">
          <span className="absolute inset-0" />
          {categoryName}
        </Link>
      </h1>
    </div>
  );
}
