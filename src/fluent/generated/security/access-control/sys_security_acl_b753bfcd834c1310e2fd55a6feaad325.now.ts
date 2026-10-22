import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b753bfcd834c1310e2fd55a6feaad325'],
    description: 'Allow read for records in x_756426_ssce_res_subject, for users with role x_756426_ssce_res.read.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_756426_ssce_res.read'],
    table: 'x_756426_ssce_res_subject',
})
