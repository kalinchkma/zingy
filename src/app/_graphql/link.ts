import { MEDIA_FIELDS } from "./media"

interface Args {
  disableLabel?: true
  disableAppearance?: true
}

export const LINK_FIELDS = ({ disableAppearance, disableLabel }: Args = {}): string => `{
  ${!disableLabel ? 'label' : ''}
  ${!disableAppearance ? 'appearance' : ''}
  type
  newTab
  url
  icon {
    iconType
    iconImage {
      ${MEDIA_FIELDS}
    }
  }
  toltip {
    toltipType
    customMessage
  }
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`
