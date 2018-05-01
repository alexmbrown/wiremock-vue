import VueRouter from 'vue-router'
import ServerNav from './components/server/ServerNav'
import MappingsNav from './components/mappings/MappingsNav'
import MappingDetails from './components/mapping-details/MappingDetails'
import ServerSelect from './components/server/ServerSelect'
import MappingSelect from './components/mappings/MappingSelect'
import Error from './components/Error'
import NotFound from './components/NotFound'

const routes = [
  {
    path: '/',
    redirect: '/servers'
  },
  {
    path: '/servers',
    component: ServerNav,
    children: [
      {
        name: 'server',
        path: '',
        component: ServerSelect
      },
      {
        path: ':serverId/mappings',
        component: MappingsNav,
        children: [
          {
            name: 'details',
            path: ':mappingId',
            component: MappingDetails
          },
          {
            name: 'mappings',
            path: '',
            component: MappingSelect
          },
        ]
      }
    ]
  },
  {
    name: 'error',
    path: '/error',
    component: Error
  },
  {
    name: 'not-found',
    path: '*',
    component: NotFound
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
