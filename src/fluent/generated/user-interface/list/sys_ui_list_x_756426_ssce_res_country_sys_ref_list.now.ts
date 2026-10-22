import { List } from '@servicenow/sdk/core'

List({
    table: 'x_756426_ssce_res_country',
    view: 'sys_ref_list',
    columns: ['name'],
})
