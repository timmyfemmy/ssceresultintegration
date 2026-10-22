import { Table, StringColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_756426_ssce_res_grade = Table({
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
    label: 'Grade',
    name: 'x_756426_ssce_res_grade',
    schema: {
        grade: StringColumn({
            label: 'Grade',
            maxLength: 40,
        }),
        high_score: IntegerColumn({
            label: 'High score',
            maxLength: 40,
        }),
        low_score: IntegerColumn({
            label: 'Low score',
            maxLength: 40,
        }),
    },
    dbObjectId: true,
})
