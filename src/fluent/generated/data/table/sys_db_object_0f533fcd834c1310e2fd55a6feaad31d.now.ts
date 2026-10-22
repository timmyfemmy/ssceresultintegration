import { Table, StringColumn, ListColumn } from '@servicenow/sdk/core'

export const x_756426_ssce_res_subject = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowConfiguration: false,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Subject',
    name: 'x_756426_ssce_res_subject',
    schema: {
        code: StringColumn({
            label: 'Code',
            maxLength: 40,
        }),
        country: ListColumn({
            label: 'Country',
            maxLength: 1024,
            referenceTable: 'x_756426_ssce_res_country',
        }),
        subject: StringColumn({
            label: 'Subject',
            maxLength: 40,
        }),
    },
    dbObjectId: true,
})
