import router from '@/router'
import NPreogress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from "@/utils/auth";
import store from '@/store'

NPreogress.configure({showSpinner: false})

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  next()
  // if (getToken()) {
  //     console.log('----------------')
  //     if (to.path === '/login') {
  //     next({path: '/'});
  //     NPreogress.done()
  //   } else {
  //     console.log('----------------')
  //     next()
  //   }
  // } else {
  //   // has no token
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //     NPreogress.done()
  //   }
  // }
})

router.afterEach(() => {
  NPreogress.done()
})