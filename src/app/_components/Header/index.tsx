import React from 'react'

import { Header as H } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

export async function Header() {
  let header: H | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
