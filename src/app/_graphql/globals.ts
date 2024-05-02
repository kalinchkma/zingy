import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'




export const CONTACT = `
  Contact {
    contactAddress {
      address
    }
    socialLinks {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
  }
`
export const CONTACT_QUERY = `
  query Contact {
   ${CONTACT}
  }
`

export const HEADER = `
  Header {
    brandLogo {
      ${MEDIA_FIELDS}
    }
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
      navCollections {
          title
          navGroup {
            link ${LINK_FIELDS({ disableAppearance: true })}
          }
        
      }
    }
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    copyright
    brandLogo {
      ${MEDIA_FIELDS}
    }
    navItems {
      navCollections {
          title
          navGroup {
            link ${LINK_FIELDS({ disableAppearance: true })}
          }
        
      }
    }
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    productsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
