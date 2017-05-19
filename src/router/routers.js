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
  }
]
export default routers
