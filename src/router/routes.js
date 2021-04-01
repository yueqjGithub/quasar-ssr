
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: '/about', name: 'about', component: () => import('pages/about/about.vue'), meta: { title: '关于我们' } },
      { path: '/gameCenter', name: 'gameCenter', component: () => import('pages/gameCenter/gameCenter.vue') },
      { path: '/news', name: 'news', component: () => import('pages/news/news.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
