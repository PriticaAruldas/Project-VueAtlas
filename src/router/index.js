import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/components/profile'
import example from '@/components/example'
import footer from '@/components/footer'
import form from '@/components/form'
import classes from '@/components/classes'
import dashboard from '@/components/dashboard'
import courses from '@/components/courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/classes',
      name: 'classes',
      component: classes
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    }
  ]
})
