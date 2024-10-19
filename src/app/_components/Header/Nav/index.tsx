'use client'

import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { MdArrowDropDown, MdArrowLeft, MdOutlineManageAccounts } from 'react-icons/md'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { cn } from '../../../_utilities/utils'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import SearchWebsite from '../../SearchWebsite'
import { Badge } from '../../ui/badge'
import { HoveredLink, Menu, MenuItem } from '../../ui/navbar-menu'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <Menu setActive={setActive}>
        {navItems.map((navGroup, i) => (
          <MenuItem
            setActive={setActive}
            active={active}
            key={i}
            item={navGroup.link.label}
            href={navGroup.link?.url}
            toltip={navGroup.link.toltip}
          >
            {typeof navGroup?.navCollections !== 'string' && (
              <div className="flex flex-col text-sm divide-y">
                {navGroup?.navCollections?.navGroup.map((navLink, i) => (
                  <HoveredLink
                    href={navLink.link?.url ? navLink.link?.url : ''}
                    target={navLink.link?.newTab ? '_blank' : ''}
                    key={i}
                  >
                    {navLink.link?.label}
                    {navLink.link?.toltip.map((t, i) => (
                      <div
                        key={i}
                        className={cn(
                          'inline-block p-2 rounded-full bg-yellow-400 text-teal-950 text-[13px]',
                        )}
                      >
                        {t.toltipType === 'new' ? 'New' : t?.customMessage}
                      </div>
                    ))}
                  </HoveredLink>
                ))}
              </div>
            )}
          </MenuItem>
        ))}
      </Menu>
      <div className="flex flex-row items-center gap-2">
        {!user && (
          <>
            <Link
              href={'/login'}
              onClick={() => (window.location.href = '/login')}
              className="text-sm transition-all duration-500 font-bold"
            >
              Sign In
            </Link>
          </>
        )}
        <SearchWebsite />
        {user && (
          <Link href="/account" className="font-bold">
            <FaRegUser className="h-4 w-4" />
          </Link>
        )}

        <CartLink className="font-bold" />
      </div>
    </div>
  )
}
