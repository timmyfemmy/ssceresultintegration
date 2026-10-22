import { Table, StringColumn, BooleanColumn, ReferenceColumn, DateColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_756426_ssce_res_candidate_registration = Table({
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
    label: 'Candidate Registration',
    name: 'x_756426_ssce_res_candidate_registration',
    schema: {
        registration_status: ChoiceColumn({
            dropdown: 'dropdown_without_none',
            label: 'Registration status',
            maxLength: 40,
            choices: {
                draft: {
                    label: 'Draft',
                    sequence: 0,
                },
                submitted: {
                    label: 'Submitted',
                    sequence: 1,
                },
                under_review: {
                    label: 'Under review',
                    sequence: 2,
                },
                approved: {
                    label: 'Approved',
                    sequence: 3,
                },
                rejected: {
                    label: 'Rejected',
                    sequence: 4,
                },
                resubmitted: {
                    label: 'Resubmitted',
                    sequence: 5,
                },
                cancelled: {
                    label: 'Cancelled',
                    sequence: 6,
                },
                completed: {
                    label: 'Completed',
                    sequence: 7,
                },
                archived: {
                    label: 'Archived',
                    sequence: 8,
                },
            },
        }),
        candidate_number: StringColumn({
            label: 'Candidate number',
            maxLength: 40,
        }),
        center_number: StringColumn({
            label: 'Center number',
            maxLength: 40,
        }),
        commerce: BooleanColumn({
            label: 'Commerce',
            maxLength: 40,
        }),
        country: ReferenceColumn({
            attributes: {
                encode_utf8: false,
                ref_auto_completer: 'AJAXReferenceChoice',
            },
            label: 'Country',
            maxLength: 32,
            referenceTable: 'x_756426_ssce_res_country',
        }),
        date_of_birth: DateColumn({
            label: 'Date of birth',
            maxLength: 40,
        }),
        english_language: BooleanColumn({
            label: 'English language',
            maxLength: 40,
        }),
        examination_number: StringColumn({
            label: 'Examination number',
            maxLength: 40,
        }),
        first_name: StringColumn({
            label: 'First name',
            maxLength: 40,
        }),
        gender: ChoiceColumn({
            dropdown: 'dropdown_without_none',
            label: 'Gender',
            maxLength: 40,
            choices: {
                male: {
                    label: 'Male',
                    sequence: 0,
                },
                female: {
                    label: 'Female',
                    sequence: 1,
                },
            },
        }),
        government: BooleanColumn({
            label: 'Government',
            maxLength: 40,
        }),
        last_name: StringColumn({
            label: 'Last name',
            maxLength: 40,
        }),
        mathematics: BooleanColumn({
            label: 'Mathematics',
            maxLength: 40,
        }),
        middle_name: StringColumn({
            label: 'Middle name',
            maxLength: 40,
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
        }),
        physics: BooleanColumn({
            label: 'Physics',
            maxLength: 40,
        }),
        further_mathematics: BooleanColumn({
            label: 'Further mathematics',
            maxLength: 40,
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
            element: 'country',
        },
    ],
    dbObjectId: true,
})
