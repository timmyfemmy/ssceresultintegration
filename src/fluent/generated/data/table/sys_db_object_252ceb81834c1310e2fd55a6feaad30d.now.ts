import { Table, StringColumn, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_756426_ssce_res_candidate_result = Table({
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
    label: 'Candidate Result',
    name: 'x_756426_ssce_res_candidate_result',
    schema: {
        candidate_number: StringColumn({
            label: 'Candidate number',
            maxLength: 40,
        }),
        candidate: ReferenceColumn({
            label: 'Candidate',
            maxLength: 32,
            referenceTable: 'x_756426_ssce_res_candidate_registration',
        }),
        center_number: StringColumn({
            label: 'Center number',
            maxLength: 40,
        }),
        examination_number: StringColumn({
            label: 'Examination number',
            maxLength: 40,
        }),
        grade: ReferenceColumn({
            label: 'Grade',
            maxLength: 32,
            referenceTable: 'x_756426_ssce_res_grade',
        }),
        score: IntegerColumn({
            label: 'Score',
            maxLength: 40,
        }),
        subject: ReferenceColumn({
            label: [
                {
                    hint: 'Subjects',
                },
            ],
            maxLength: 32,
            referenceTable: 'x_756426_ssce_res_subject',
        }),
        year: StringColumn({
            label: 'Year',
            maxLength: 40,
        }),
    },
    index: [
        {
            name: 'index',
            unique: false,
            element: 'candidate',
        },
        {
            name: 'index2',
            unique: false,
            element: 'grade',
        },
        {
            name: 'index3',
            unique: false,
            element: 'subject',
        },
    ],
    dbObjectId: true,
})
