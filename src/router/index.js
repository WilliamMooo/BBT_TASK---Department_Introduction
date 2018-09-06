import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import option from '@/components/option'
import organization from '@/components/organization'
import department from '@/components/department'
import event from '@/components/event'
import jiemu from '@/components/jiemu'
import cetui from '@/components/cetui'
import zongguan from '@/components/zongguan'
import jishu from '@/components/jishu'
import shipin from '@/components/shipin'
import xinwen from '@/components/xinwen'
import bianji from '@/components/bianji'
import renli from '@/components/renli'
import shishe from '@/components/shishe'
import wailian from '@/components/wailian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/option',
      name: 'option',
      component: option
    },
    {
      path: '/organization-introduction',
      name: 'organization-introduction',
      component: organization
    },
    {
      path: '/department-introduction',
      name: 'department-introduction',
      component: department
    },
    {
      path: '/event-introduction',
      name: 'event-introduction',
      component: event
    },
    {
      path: '/jiemu',
      name: 'jiemu',
      component: jiemu
    },
    {
      path: '/cetui',
      name: 'cetui',
      component: cetui
    },
    {
      path: '/zongguan',
      name: 'zongguan',
      component: zongguan
    },
    {
      path: '/jishu',
      name: 'jishu',
      component: jishu
    },
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    },
    {
      path: '/xinwen',
      name: 'xinwen',
      component: xinwen
    },
    {
      path: '/bianji',
      name: 'bianji',
      component: bianji
    },
    {
      path: '/renli',
      name: 'renli',
      component: renli
    },
    {
      path: '/shishe',
      name: 'shishe',
      component: shishe
    },
    {
      path: '/wailian',
      name: 'wailian',
      component: wailian
    }
  ]
})
