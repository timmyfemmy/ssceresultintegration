import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['61957305838c1310e2fd55a6feaad3af'],
    description:
        'Allow delete for records in x_756426_ssce_res_candidate_registration, for users with role x_756426_ssce_res.delete.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_756426_ssce_res.delete'],
    table: 'x_756426_ssce_res_candidate_registration',
})
