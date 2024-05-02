import React from 'react'
import Link from 'next/link'

import { Footer as F, Contact } from '../../../payload/payload-types'
import { fetchContact, fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: F | null = null
  let contacts: Contact | null = null

  try {
    footer = await fetchFooter()
    contacts = await fetchContact()
    
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <FooterComponent footer={footer} contacts={contacts} />
    </>
  )
}
