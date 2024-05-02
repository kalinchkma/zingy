import type { CollectionConfig } from 'payload/types'
import link from '../fields/link'

const NavCollections: CollectionConfig = {
  slug: 'navCollections',
  labels: {
    singular: 'Navigation Collection',
    plural: 'Navigation Collections'
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'navGroup',
      type: 'array',
      maxRows: 15,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}

export default NavCollections
