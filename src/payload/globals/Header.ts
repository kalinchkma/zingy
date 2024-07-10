import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandLogo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 10,
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'navCollections',
          type: 'relationship',
          relationTo: 'navCollections',
          hasMany: false,
          required: false,
        },
      ],
    },
  ],
}
