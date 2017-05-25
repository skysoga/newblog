const routers = [
  {
    path: '/',
    name: 'Hello',
    component: require('@/components/Hello')
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/login')
  },
  {
    path: '/group',
    name: 'group',
    component: require('../views/groups')
  },
  {
    path: '/cgroup',
    name: 'createGroup',
    component: require('../views/createGroup')
  },
  {
    path: '/cdoc',
    name: 'createdoc',
    component: require('../views/createdoc')
  }
]
export default routers
