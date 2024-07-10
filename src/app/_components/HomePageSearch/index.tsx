import React from 'react'

import { Gutter } from '../Gutter'

export const HomePageSearch = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <input
        placeholder="Search products..."
        className="w-full py-2 px-4 md:w-[90%] border border-stone-500 focus:outline-yellow-400 focus:ring-0 rounded-full "
      />
    </div>
  )
}
