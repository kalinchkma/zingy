import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandLogo',
      type: 'upload',
      relationTo: 'media',
     
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'navCollections',
          type: 'relationship',
          relationTo: 'navCollections',
          hasMany: false,
          required: false
        }
      ],
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
    },

  ],
}
