import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        // {
        //   name: 'Dashboard',
        //   path: '',
        //   component: () => import('@/views/dashboard/Dashboard'),
        // },
        // // Pages
        // {
        //   name: 'User Profile',
        //   path: 'pages/user',
        //   component: () => import('@/views/dashboard/pages/UserProfile'),
        // },
        // {
        //   name: 'Notifications',
        //   path: 'components/notifications',
        //   component: () => import('@/views/dashboard/component/Notifications'),
        // },
        // {
        //   name: 'Icons',
        //   path: 'components/icons',
        //   component: () => import('@/views/dashboard/component/Icons'),
        // },
        // {
        //   name: 'Typography',
        //   path: 'components/typography',
        //   component: () => import('@/views/dashboard/component/Typography'),
        // },
        // // Tables
        // {
        //   name: 'Regular Tables',
        //   path: 'tables/regular-tables',
        //   component: () => import('@/views/dashboard/tables/RegularTables'),
        // },
        // Maps
        {
          name: 'HomePage',
          path: '',
          component: () => import('@/views/dashboard/homePage/Landing'),
        },
        {
          name: 'appDownload',
          path: 'appDownload',
          component: () => import('@/views/dashboard/homePage/appDownload'),
        },
        {
          name: 'Subjects',
          path: 'Subjects',
          component: () => import('@/views/dashboard/homePage/HomePage'),
        },
        {
          name: 'Documents',
          path: 'Documents',
          component: (a) => import('@/views/dashboard/homePage/documentListPage'),
        },
        {
          name: 'Documents2',
          path: 'Documents2',
          component: (a) => import('@/views/dashboard/homePage/documentListPage2'),
        },
        {
          name: 'aboutUs',
          path: 'aboutUs',
          component: (a) => import('@/views/dashboard/homePage/aboutUs'),
        },
        {
          name: 'feedback',
          path: 'feedback',
          component: (a) => import('@/views/dashboard/homePage/feedback'),
        },

        // // Upgrade
        // {
        //   name: 'Upgrade',
        //   path: 'upgrade',
        //   component: () => import('@/views/dashboard/Upgrade'),
        // },
      ],
    },
    {
      path: '/Login',
      component: () => import('@/views/dashboard/homePage/Login'),
    },
    {
      path: '/Admin',
      component: () => import('@/views/dashboard/homePage/LoginAdmin'),
    },
    {
      path: '/adminHome',
      component: () => import('@/views/dashboard/homePage/adminHome'),
    },
  ],
})
