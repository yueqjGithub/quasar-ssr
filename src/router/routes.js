
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: '/about', name: 'about', component: () => import('pages/about/about.vue'), meta: { title: '关于我们' } },
      { path: '/gameCenter', name: 'gameCenter', component: () => import('pages/gameCenter/gameCenter.vue'), meta: { title: '游戏中心', hideFoot: true } },
      { path: '/gameDetail', name: 'gameDetail', component: () => import('pages/gameCenter/gameDetail.vue'), meta: { showBack: true } },
      { path: '/news', name: 'news', component: () => import('pages/news/news.vue'), meta: { title: '新闻中心' } }
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
