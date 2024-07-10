'use client'

import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Collapsible } from '@radix-ui/react-collapsible'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Contact, Footer, Media } from '../../../../payload/payload-types'
import { cn } from '../../../_utilities/utils'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'
import { CMSLink } from '../../Link'
import { Media as MediaImage } from '../../Media'
import SocialIcon from '../../SocialIcon'
import { CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible'
import NewsletterForm from '../NewslatterForm'

import classes from './index.module.scss'

const FooterComponent = ({ footer, contacts }: { footer: Footer; contacts: Contact }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  const brandLogo = footer?.brandLogo || ''
  const contactAddresses = contacts?.contactAddress || []
  const socialLinks = contacts?.socialLinks || []

  return (
    <footer className={cn(noHeaderFooterUrls.includes(pathname) ? classes.hide : '')}>
      {/* <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter> */}

      <div className={classes.footer}>
        <Gutter>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-10">
            {/* contacts and logo */}
            <div className={cn(classes.contact_wrap, 'md:col-span-2')}>
              {typeof brandLogo !== 'string' && (
                <Link href={'/'} className={classes.footerGap}>
                  <MediaImage resource={brandLogo} className="w-[170px] h-auto" />
                </Link>
              )}

              {/* contact addresses */}
              <div className={cn('flex w-full flex-col', classes.contactAddress)}>
                {contactAddresses.map((address, i) => (
                  <p key={i} className={cn(classes.footerText, 'break-words')}>
                    {address.address}
                  </p>
                ))}
              </div>
              {/* social links */}
              <div className={cn(classes.socialLinks)}>
                {socialLinks.map(item => {
                  return (
                    <Button
                      key={item.link.label}
                      el="link"
                      href={item.link.url}
                      newTab={true}
                      className={classes.socialLinkItem}
                    >
                      {item.link?.icon.map((icon, i) => (
                        <SocialIcon icon={icon} key={i} />
                      ))}
                      <div className={classes.border}></div>
                    </Button>
                  )
                })}
              </div>
            </div>
            {/* navigation links */}

            {navItems.map((items, i) => (
              <div key={i}>
                {/* for big screen */}
                <div className="w-full hidden md:flex flex-col">
                  {typeof items.navCollections !== 'string' && (
                    <>
                      <h4 className={cn(classes.footerGap, 'text-lg font-bold')}>
                        {items.navCollections.title}
                      </h4>
                      <ul className="flex flex-col gap-2 ">
                        {items.navCollections.navGroup.map((navItem, i) => (
                          <li key={i}>
                            <CMSLink
                              className={cn(classes.footerLink, classes.footerText)}
                              {...navItem.link}
                            />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                {/* for small screen */}
                {typeof items.navCollections !== 'string' && (
                  <Collapsible className="block md:hidden">
                    <CollapsibleTrigger
                      className={cn(
                        classes.footerGap,
                        'w-full text-lg font-bold m-0 py-3 flex flex-row justify-between items-center border-b-2 border-stone-400 mb-4',
                      )}
                    >
                      <span>{items.navCollections.title} </span>
                      <FaPlus />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-4">
                        {items.navCollections.navGroup.map((navItem, i) => (
                          <li key={i}>
                            <CMSLink
                              className={cn(classes.footerLink, classes.footerText)}
                              {...navItem.link}
                            />
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>
            ))}

            {/* news latter */}
            <div className={cn('flex flex-col md:col-span-3 lg:col-span-2', classes.newslatter)}>
              <h4 className={cn(classes.footerGap, 'text-lg font-bold')}>Newsletter Sign Up</h4>
              <p className={cn('text-sm', classes.footerText)}>
                Receive our latest updates about our products and promotions.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </Gutter>
      </div>
      <div className={classes.copyright}>
        <Gutter>
          <p className="text-sm">{footer?.copyright}</p>
          <div></div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
