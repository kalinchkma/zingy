"use client"
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import React, { useState } from 'react'

import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Input } from '../ui/input';
import { FaFireAlt } from "react-icons/fa";
import Link from 'next/link';

const SearchWebsite: React.FC = () => {
    const [searKey, setSearchKey] = useState<string | undefined>(undefined)

  return (
    <Dialog >
        <DialogTrigger className='flex items-center ' asChild>
            <button ><IoSearch  className='font-bold h-5 w-5 transition-all hover:scale-100' /></button>
        </DialogTrigger>
        <DialogContent className='bg-white w-[100vw] h-[100vh]'>
            <div className='flex items-center justify-start flex-col'>
                {/* search form */}
                <form className='flex flex-col w-full md:w-[600px] justify-center mb-5'>
                    <h4 className='text-2xl text-center py-5 font-semibold'>Search Website</h4>
                    <div className='w-full relative'>
                        <span className='absolute left-0 top-[50%] translate-y-[-50%] px-2'>
                        <IoSearch  />
                        </span>
                        <Input className='px-8 pr-10 placeholder:text-stone-600' placeholder='Search' type='text'  value={searKey ? searKey : ''} onChange={(e) => setSearchKey(e.target.value)}/>
                        {
                            searKey &&

                        <button type='button' className='absolute right-[20px] top-[50%] translate-y-[-50%] p-1 border border-stone-400 hover:border-stone-900' onClick={() => setSearchKey(undefined)}>
                            <IoMdClose className='h-2 w-2'/>
                        </button>
                        }
                    </div>
                </form>
                {/* search result */}
                <div className='w-full'>
                    {/* suggestiong */}
                    
                        <div className='grid grid-cols-6'>
                            {/* Quick link */}
                            <div className='flex flex-col items-start justify-center'>
                                <h4 className='font-semibold'>Quick Link</h4>
                                <ul>
                                    <li>
                                        <Link href={"/"} className='text-sm text-stone-800'>Fasion</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className='text-sm text-stone-800'>Men</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className='text-sm text-stone-800'>Women</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className='text-sm text-stone-800'>Accessories</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* trending */}
                            <div className='col-span-5 flex flex-col justify-start items-start'>
                                <h4 className='font-semibold flex items-center'><FaFireAlt className='text-orange-600 h-4 w-4' />Trending/Top selling <FaFireAlt className='text-orange-600 h-4 w-4' /></h4>
                            </div>
                        </div>
                    
                    
                </div>
                
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default SearchWebsite