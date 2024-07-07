'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'
import { Media as MediaImage } from '../../Media'
import { Menu } from '../../ui/navbar-menu'
import { FloatingNav } from '../../ui/floating-navbar'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  const brandLogo = header?.brandLogo || '';

  return (
    <>
    {/* static navigation bar */}
    <div className={[classes.header,noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}>
        <Gutter className={classes.wrap}>     
          {
          typeof brandLogo !== "string" &&
          <Link href="/">
            <MediaImage resource={brandLogo} className='w-[100px] h-auto' />
          </Link>
          }
          <HeaderNav header={header} />
        </Gutter>
    </div>
    {/* floating navigation bar */}
    <FloatingNav
      className={[classes.header,noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
       
        <Gutter className={classes.wrap}>
          {
          typeof brandLogo !== "string" &&
          <Link href="/">
            <MediaImage resource={brandLogo} className='w-[100px] h-auto' />
          </Link>
          }

          <HeaderNav header={header} />
        </Gutter>

       
    </FloatingNav>
    </>
  )
}

export default HeaderComponent
