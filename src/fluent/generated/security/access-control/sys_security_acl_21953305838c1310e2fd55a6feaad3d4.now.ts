import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['21953305838c1310e2fd55a6feaad3d4'],
    description:
        'Allow write for records in x_756426_ssce_res_candidate_registration, for users with role x_756426_ssce_res.write.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_756426_ssce_res.write'],
    table: 'x_756426_ssce_res_candidate_registration',
})
