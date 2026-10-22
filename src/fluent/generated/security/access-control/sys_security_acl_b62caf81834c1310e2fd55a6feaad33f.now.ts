import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b62caf81834c1310e2fd55a6feaad33f'],
    description:
        'Allow delete for records in x_756426_ssce_res_candidate_result, for users with role x_756426_ssce_res.delete.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_756426_ssce_res.delete'],
    table: 'x_756426_ssce_res_candidate_result',
})
