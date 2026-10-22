import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ed957305838c1310e2fd55a6feaad3ba'],
    description:
        'Allow create for records in x_756426_ssce_res_candidate_registration, for users with role x_756426_ssce_res.create.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_756426_ssce_res.create'],
    table: 'x_756426_ssce_res_candidate_registration',
})
