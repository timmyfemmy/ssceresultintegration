import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['be2caf81834c1310e2fd55a6feaad34c'],
    description:
        'Allow read for records in x_756426_ssce_res_candidate_result, for users with role x_756426_ssce_res.read.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_756426_ssce_res.read'],
    table: 'x_756426_ssce_res_candidate_result',
})
