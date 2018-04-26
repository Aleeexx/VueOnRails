import editTag from '../components/tags/editTag'
import listTags from '../components/tags/ListTags'
import newTag from '../components/tags/newTag'
import showTag from '../components/tags/showTag'

export default [
  {
    path: '/',
    name: 'home'
  },
  {
    name: 'contact',
    component: editTag
  },
  {
    name: 'collector',
    component: collector
  },
  {
    name: 'imprint',
    component: imprint
  },
  {
    name: 'purchase',
    component: purchase
  }
]
