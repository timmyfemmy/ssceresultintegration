import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_756426_ssce_res_country = Table({
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
    label: 'Country',
    name: 'x_756426_ssce_res_country',
    schema: {
        code: StringColumn({
            label: 'Code',
            maxLength: 40,
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
        }),
        test_field: StringColumn({
            label: 'Test field',
            maxLength: 40,
        }),
    },
    dbObjectId: true,
})
