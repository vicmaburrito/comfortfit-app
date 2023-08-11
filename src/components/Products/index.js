import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom';
import Product from './product';
import Image1 from '../../assets/secondBlock-1.jpeg';
import Image2 from '../../assets/secondBlock-2.jpeg';
import Image3 from '../../assets/secondBlock-3.jpeg';
import Image4 from '../../assets/secondBlock-4.jpeg';
import Image5 from '../../assets/secondBlock-5.jpeg';

export default function Products() {
  const { category } = useParams();

  const getProductComponent = (category) => {
    switch (category) {
      case 'sets':
        return [
          <Product key={1} Image={Image1} category={category} />,
          <Product key={2} Image={Image2} category={category} />,
          <Product key={3} Image={Image3} category={category} />,
        ];
      case 'leggings':
        return <Product Image={Image2} category={category} />;
      case 'tops':
        return <Product Image={Image3} category={category} />;
      case 'accesories':
        return <Product Image={Image4} category={category} />;
      case 'shorts':
        return <Product Image={Image5} category={category} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <a href="/" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
              {getProductComponent(category)}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="/" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
