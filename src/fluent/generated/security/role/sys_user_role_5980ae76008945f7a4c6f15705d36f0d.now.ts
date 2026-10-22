import { Role } from '@servicenow/sdk/core'

Role({
    name: 'x_756426_ssce_res.user',
    description: 'Basic access for app users',
    //federatedId: '0KH8ZsApJBeuCtIyFCRy0aFv9f5rRW3J6AB2CozFdn0=',
    containsRoles: ['x_756426_ssce_res.create', 'x_756426_ssce_res.read', 'x_756426_ssce_res.write']    
})