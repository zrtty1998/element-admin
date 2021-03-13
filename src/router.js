import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from '@/views/ListArticle.vue'
import CreateArticle from '@/views/CreateArticle.vue'
import EditArticle from '@/views/EditArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/articles/index',
      name: 'home'
    },
    {
      path: '/articles/index',
      component: ListArticle,
      name: 'list-article'
    },
    {
      path: '/articles/create',
      component: CreateArticle,
      name: 'create-article'
    },
    {
      path: '/articles/:id/edit',
      component: EditArticle,
      name: 'edit-article'
    }
  ]
})
