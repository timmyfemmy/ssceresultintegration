import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['322caf81834c1310e2fd55a6feaad358'],
    description:
        'Allow write for records in x_756426_ssce_res_candidate_result, for users with role x_756426_ssce_res.write.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_756426_ssce_res.write'],
    table: 'x_756426_ssce_res_candidate_result',
})
