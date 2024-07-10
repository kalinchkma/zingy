'use client'
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '../../_utilities/utils'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  toltip,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
  href: string
  toltip?: {
    toltipType?: 'custom' | 'new'
    customMessage?: string
    id?: string
  }[]
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative z-[9999999]">
      <motion.a
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-sm font-bold relative"
        href={href}
      >
        {item}
        {toltip &&
          toltip.map((t, i) => (
            <React.Fragment>
              <div
                key={i}
                className={cn(
                  'flex items-center flex-nowrap leading-none px-[4px] py-0 bg-yellow-400 text-teal-950 text-[10px] absolute top-[-180%] left-[50%]  translate-x-[-50%] ',
                )}
              >
                {t.toltipType === 'new' ? 'New' : t?.customMessage}
              </div>
              <MdArrowDropDown
                key={i}
                className="h-5 w-5 absolute top-[-100%] left-[50%]  translate-x-[-50%] text-yellow-400"
              />
            </React.Fragment>
          ))}
      </motion.a>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative max-w-fit boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex  space-x-4 "
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black py-2 flex flex-row items-center gap-2"
    >
      {children}
    </Link>
  )
}
