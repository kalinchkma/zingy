import React from 'react'
import { Gutter } from '../Gutter'

export const HomePageSearch = () => {
  return (
    <Gutter>
        <div className='flex items-center justify-center'>
            <input placeholder='Search products...' className='w-[90%]' />
        </div>
    </Gutter>
  )
}
