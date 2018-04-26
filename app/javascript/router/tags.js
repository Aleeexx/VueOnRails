import editTag from '../components/tags/editTag'
import listTags from '../components/tags/ListTags'
import newTag from '../components/tags/newTag'
import showTag from '../components/tags/showTag'

export default [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/tags/:id/edit',
    name: 'editTag',
    component: editTag
  },
  {
    path: '/tags',
    name: 'listTag',
    component: listTags
  },
  {
    path: '/tags/new',
    name: 'newTag',
    component: newTag
  },
  {
    path: '/tags/:id',
    name: 'showTag',
    component: showTag
  }
]
