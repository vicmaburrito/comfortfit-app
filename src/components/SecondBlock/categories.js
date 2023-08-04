import React from 'react';
import Category from './category';
import imgSets from '../../assets/sets/img-1.jpeg';
import imgLegging from '../../assets/leggings/img-1.jpeg';
import imgTops from '../../assets/tops/img-1.jpeg';
import imgAccessories from '../../assets/accessories/img-1.jpeg';
import imgShorts from '../../assets/shorts/img-1.jpeg';

export default function Categories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>
          <a href="/" className="hidden text-sm font-semibold text-violet-600 hover:text-violet-500 sm:block">
            Todos los productos
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-5 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          <Category image={imgSets} categoryName="Set&apos;s" productLink="/sets/products" />
          <Category image={imgLegging} categoryName="Leggings" productLink="leggings/products" />
          <Category image={imgTops} categoryName="Tops" productLink="tops/products" />
          <Category image={imgAccessories} categoryName="Accessorios" productLink="accesories/products" />
          <Category image={imgShorts} categoryName="Shorts" productLink="shorts/products" />
        </div>

        <div className="mt-6 sm:hidden">
          <a href="/" className="block text-sm font-semibold text-violet-600 hover:text-violet-500">
            Todos los productos
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
