import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Management from '@/components/Management'
import System from '@/components/System'
import Components from '@/components/Components'
import MenuManage from '@/components/MenuManage'
import RoleManage from '@/components/RoleManage'
import UserManage from '@/components/UserManage'
import NewBuilt from '@/components/NewBuilt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: '/management',
          name: 'Management',
          component: Management,
          children: [
            {
              path: 'menuManage',
              name: 'MenuManage',
              component: MenuManage
            },
            {
              path: 'roleManage',
              name: 'RoleManage',
              component: RoleManage
            },
            {
              path: 'userManage',
              name: 'UserManage',
              component: UserManage
            },
            {
              path: 'newBuilt',
              name: 'NewBuilt',
              component: NewBuilt
            }
          ]
        },
        {
          path: '/system',
          name: 'System',
          component: System
        },
        {
          path: '/components',
          name: 'Components',
          component: Components
        }
      ]
    }
  ]
})
