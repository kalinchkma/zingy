import type { GlobalConfig } from "payload/types";

import link from "../fields/link";

export const Contact: GlobalConfig = {
    slug: 'contact',
    access: {
        read: () => true
    },
    fields: [
        {
           name: 'contactAddress',
           type: 'array',
           maxRows: 6,
           fields: [
            {
                name: 'address',
                type: 'text'
            }
           ] 
        },
        {
            name: 'socialLinks',
            type: 'array',
            maxRows: 15,
            fields: [
                link({
                    appearances: false
                })
            ]
        }
    ]
}

