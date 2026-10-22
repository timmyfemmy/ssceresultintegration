import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fa2caf81834c1310e2fd55a6feaad35a'],
    description:
        'Allow create for records in x_756426_ssce_res_candidate_result, for users with role x_756426_ssce_res.create.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_756426_ssce_res.create'],
    table: 'x_756426_ssce_res_candidate_result',
})
