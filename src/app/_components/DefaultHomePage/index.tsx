import React from 'react'

import { Gutter } from '../Gutter'
import { HomePageSearch } from '../HomePageSearch'

/**
 * This component is deprecated
 */

const DefaultHomePage = () => {
  return (
    <Gutter>
      <div className="w-full flex flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1 className="leading-none text-6xl pt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
            Zingy
          </h1>
          <p className="font-light">Search your desire product</p>
        </div>
        <HomePageSearch />
      </div>
    </Gutter>
  )
}

export default DefaultHomePage
