import editPost from '../components/posts/editPost'
import listPosts from '../components/posts/ListPosts'
import newPost from '../components/posts/newPost'
import showPost from '../components/posts/showPost'

export default [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/posts/:id/edit',
    name: 'editPost',
    component: editPost
  },
  {
    path: '/posts',
    name: 'listPost',
    component: listPosts
  },
  {
    path: '/posts/new',
    name: 'newPost',
    component: newPost
  },
  {
    path: '/posts/:id',
    name: 'showPost',
    component: showPost
  }
]
