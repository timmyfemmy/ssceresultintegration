import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f6d3fb01838c1310e2fd55a6feaad3d8'],
    description: 'Allow read for records in x_756426_ssce_res_country, for users with role x_756426_ssce_res.read.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_756426_ssce_res.read'],
    table: 'x_756426_ssce_res_country',
})
