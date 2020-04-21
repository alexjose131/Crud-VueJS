import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'
import PostsView from '../views/PostsView.vue'
import PostComponent from '../components/PostComponent.vue'
import CreatePost from '../components/createPostComponent.vue'
import EditPost from '../components/editPostComponent.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsView,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: PostComponent
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/editPost/:id',
    name: 'EditPost',
    component: EditPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
