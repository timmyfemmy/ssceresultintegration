import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6b533fcd834c1310e2fd55a6feaad39e'],
    description: 'Allow create for records in x_756426_ssce_res_subject, for users with role x_756426_ssce_res.create.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_756426_ssce_res.create'],
    table: 'x_756426_ssce_res_subject',
})
