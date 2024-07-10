'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { Media as MediaImage } from '../../Media'
import { FloatingNav } from '../../ui/floating-navbar'
import { Menu } from '../../ui/navbar-menu'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  const brandLogo = header?.brandLogo || ''

  return (
    <>
      {/* static navigation bar */}
      <div
        className={[
          'bg-white border-b',
          classes.header,
          noHeaderFooterUrls.includes(pathname) && classes.hide,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Gutter className={classes.wrap}>
          {typeof brandLogo !== 'string' && (
            <Link href="/" className="py-2">
              <MediaImage resource={brandLogo} className="max-w-[100px] " />
            </Link>
          )}
          <HeaderNav header={header} />
        </Gutter>
      </div>
      {/* floating navigation bar */}
      <FloatingNav
        className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
          .filter(Boolean)
          .join(' ')}
      >
        <Gutter className={classes.wrap}>
          {typeof brandLogo !== 'string' && (
            <Link href="/" className="py-2">
              <MediaImage resource={brandLogo} className="w-[100px] h-auto" />
            </Link>
          )}

          <HeaderNav header={header} />
        </Gutter>
      </FloatingNav>
    </>
  )
}

export default HeaderComponent
